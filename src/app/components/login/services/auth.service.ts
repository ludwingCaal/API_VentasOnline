import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient, HttpHeaders } from "@angular/common/http"; //se importa para realizar diversos tipos de peticiones
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuario:Usuario;
  private _token:string;

  constructor(private httpclient:HttpClient) { } //httpclient se crea poder hacer cualquier peticion (Get, post, put, delete, etc)
  
  public get token(): string{
    if(this._token !=null){
      return this._token;
    }else if(this._token==null && sessionStorage.getItem('token')!=null){
      this._token=sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  public get usuario(): Usuario{
    if(this._usuario!=null){
      return this._usuario;
    }else if(this._usuario==null && sessionStorage.getItem('usuario')!=null){
      this._usuario=JSON.parse(sessionStorage.getItem('ususario'));
      return this._usuario;
    }
    return new Usuario();
  }

  login(usuario: Usuario):Observable<any> {
    const urlEndPoint='https://localhost:44380/api/v1/cuentas/login';
    const httpHeaders=new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.httpclient.post(urlEndPoint,usuario,{headers:httpHeaders});
  }

  logout():void{
    this._token=null;
    this._usuario=null;
    sessionStorage.clear(); //limpia el storage
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
  }

  isAuthenticated():boolean{
    const payload=this.GetDataToken(this.token);
    if(payload!=null && payload.unique_name && payload.unique_name.length>0){
      return true;
    }
    return false;
  }

  saveUser(token:string){
    this._usuario=new Usuario();
    const payload=this.GetDataToken(token); //obtiene el token
    this._usuario.email=payload.unique_name;
    sessionStorage.setItem('usuario',JSON.stringify(this._usuario)); //almacena la información en el storage, convirtiendolo en formato json y de tipo strinify
  }                                     //setItem recibe de parametros un nombre de tipo string y el objeto a almacenar.

  saveToken(token: string){
    this._token=token;
    sessionStorage.setItem('token',token); //almacena el token en la sesión "Storage".
  }                                        //metodo setItem recibe un nombre para el token y el token.

  GetDataToken(token:string):any{
    if(token!=null){
      return JSON.parse(atob(token.split('.')[1])); //atob es una función que desencripta un token y el metodo split separa el token de acuerdo a lo que separa y la posición
    }
    return null;
  }
}
