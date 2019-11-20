import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Categoria } from '../categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private API_URL = 'https://localhost:44380/api/v1';
  //token=''; genera un token a una appi con autenticación
  constructor(private _httpCliente:HttpClient) { }

  getData(url: string){
    //const headers=new HttpHeaders({'Authorization':`Bearer ${this.token}`});//autenticando el token generado 
    //const headers=new HttpHeaders({'':``});
    return this._httpCliente.get<Categoria[]>(`${this.API_URL}/${url}`);//,{headers});
  }

  getCategorias(){
    return this.getData('Categorias');
  }
}
