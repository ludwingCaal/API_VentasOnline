import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { Observable, throwError } from 'rxjs';
import { Categoria } from '../../categorias/categoria';
import { TipoEmpaque } from '../../tipo-empaques/tipo-empaque';
import { catchError, map } from "rxjs/operators";
import { ProductoCreacionDTO } from '../producto-creacion-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlEnPoint='https://localhost:44380/api/v1';
  constructor(private httpClient:HttpClient, private router:Router) { }
  
  getProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.urlEnPoint}/productos`);
  }
  getCategorias():Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>(`${this.urlEnPoint}/categorias`);
  }
  getTipoEmpaques():Observable<TipoEmpaque[]>{
    return this.httpClient.get<TipoEmpaque[]>(`${this.urlEnPoint}/tipoempaques`);
  }
  create(producto:ProductoCreacionDTO):Observable<Producto>{
    return this.httpClient.post(`${this.urlEnPoint}/Productos`, producto)
    .pipe(
      map((response:any)=>response as Producto),
      catchError(e => {
        if(e.status===400){
          return throwError(e);
        }
        return throwError(e);
      })
      );
  }
  delete(id:number):Observable<Producto>{
    return this.httpClient.delete<Producto>(`${this.urlEnPoint}/Productos/${id}`)
    .pipe(catchError(e=>{
      return throwError(e);
    })
    );
  }
  update(id:number, productoCreacionDTO:ProductoCreacionDTO):Observable<any>{
    return this.httpClient.put<any>(`${this.urlEnPoint}/Productos/${id}`, productoCreacionDTO)
    .pipe(
      catchError(e=>{
        if(e.status===400){
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }
  getProducto(id:number):Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.urlEnPoint}/Productos/${id}`)
    .pipe(
      catchError(e=>{
        if(e.status!==401){
          this.router.navigate(['/productos']);
        }
        return throwError(e);
      })
    );
  }
}
