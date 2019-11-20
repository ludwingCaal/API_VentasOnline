import { Component, OnInit } from '@angular/core';
import { TipoEmpaqueServiceService } from './service/tipo-empaque-service.service';

@Component({
  selector: 'app-tipo-empaques',
  templateUrl: './tipo-empaques.component.html',
  styleUrls: ['./tipo-empaques.component.css']
})
export class TipoEmpaquesComponent implements OnInit {
  tipoEmpaques:any[]=[];
  constructor(private TipoEmpaqueServiceService: TipoEmpaqueServiceService) { 
    this.TipoEmpaqueServiceService.getTipoEmpaques().subscribe((data:any)=>this.tipoEmpaques=data);
  }

  ngOnInit() {
    
  }

}
