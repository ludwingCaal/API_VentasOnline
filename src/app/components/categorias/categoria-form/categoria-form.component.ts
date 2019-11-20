import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from "../service/categoria-service.service";

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

    titulo:string;
    categoria:Categoria;
  constructor(
    private categoriaService:CategoriaService
  ) { }

  ngOnInit() {
  }

}
