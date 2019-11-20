import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TipoEmpaque } from '../tipo-empaque';

@Injectable({
  providedIn: 'root'
})
export class TipoEmpaqueServiceService {
  private API_URL='https://localhost:44380/api/v1';
  //private token="";
  constructor(private _httpCliente: HttpClient) { }

  getData(url:string){
    //const headers=new HttpHeaders({'Authorization':``});
    return this._httpCliente.get<TipoEmpaque[]>(`${this.API_URL}/${url}`/*,{headers}*/);
  }
  
  getTipoEmpaques(){
    return this.getData('TipoEmpaques');
  }
}
