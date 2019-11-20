import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { TipoEmpaqueServiceService } from './service/tipo-empaque-service.service';
=======
>>>>>>> 24c460a5487adcdc9ee8c8454717fdfdcba845b9

@Component({
  selector: 'app-tipo-empaques',
  templateUrl: './tipo-empaques.component.html',
  styleUrls: ['./tipo-empaques.component.css']
})
export class TipoEmpaquesComponent implements OnInit {
<<<<<<< HEAD
  tipoEmpaques:any[]=[];
  constructor(private TipoEmpaqueServiceService: TipoEmpaqueServiceService) { 
    this.TipoEmpaqueServiceService.getTipoEmpaques().subscribe((data:any)=>this.tipoEmpaques=data);
  }

  ngOnInit() {
    
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 24c460a5487adcdc9ee8c8454717fdfdcba845b9
  }

}
