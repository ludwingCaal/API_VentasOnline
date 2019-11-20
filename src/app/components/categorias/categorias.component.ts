import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CategoriaService } from "./service/categoria-service.service";
=======
import { CategoriaService } from './service/categoria-service.service';
>>>>>>> 24c460a5487adcdc9ee8c8454717fdfdcba845b9

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias:any[]=[];
<<<<<<< HEAD

  constructor(private categoriaService:CategoriaService) { 
    this.categoriaService.getCategorias().subscribe((data:any)=>{
      this.categorias=data; 
      console.log(data);
    });
=======
  constructor(private _categoriaService:CategoriaService) { 
    this._categoriaService.getCategorias().subscribe((data:any)=>{this.categorias=data;});
>>>>>>> 24c460a5487adcdc9ee8c8454717fdfdcba845b9
  }

  ngOnInit() {
  }

}
