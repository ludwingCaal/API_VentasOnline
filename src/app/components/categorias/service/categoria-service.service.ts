import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Categoria } from '../categoria';


=======
import{HttpClient, HttpHeaders} from '@angular/common/http';
>>>>>>> 24c460a5487adcdc9ee8c8454717fdfdcba845b9
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
<<<<<<< HEAD
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
=======
  private API_URL='http://192.168.31.145:9200/api/v1';
  private token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjY2Njk0NDYsInVzZXJfbmFtZSI6ImV0dW1heCIsImp0aSI6ImMzY2JlNGU1LTZiY2ItNGQ4Ny1iYWM2LTkyMzUxNTFhMDVhYiIsImNsaWVudF9pZCI6ImFsbWFjZW4iLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.Z5s5RX2B38lemTwklgyeyKcMK09kPuWi1UpKCSbMyPw';
  constructor(private _httpCliente:HttpClient) { }

  getData(url: string){
    const headers=new HttpHeaders({'Authorization':`Bearer ${this.token}`});
    return this._httpCliente.get(`${this.API_URL}/${url}`, {headers});
  }

  getCategorias(){
    return this.getData('categorias');
>>>>>>> 24c460a5487adcdc9ee8c8454717fdfdcba845b9
  }
}
