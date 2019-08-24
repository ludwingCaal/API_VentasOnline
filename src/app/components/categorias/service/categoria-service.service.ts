import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private API_URL='http://192.168.31.145:9200/api/v1';
  private token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjY2Njk0NDYsInVzZXJfbmFtZSI6ImV0dW1heCIsImp0aSI6ImMzY2JlNGU1LTZiY2ItNGQ4Ny1iYWM2LTkyMzUxNTFhMDVhYiIsImNsaWVudF9pZCI6ImFsbWFjZW4iLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.Z5s5RX2B38lemTwklgyeyKcMK09kPuWi1UpKCSbMyPw';
  constructor(private _httpCliente:HttpClient) { }

  getData(url: string){
    const headers=new HttpHeaders({'Authorization':`Bearer ${this.token}`});
    return this._httpCliente.get(`${this.API_URL}/${url}`, {headers});
  }

  getCategorias(){
    return this.getData('categorias');
  }
}
