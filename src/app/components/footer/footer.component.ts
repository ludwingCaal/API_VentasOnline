import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number;
  compania: string;
  constructor() { 
    this.anio=new Date().getFullYear();
    this.compania= 'Ventas Online V1.0';
  }

  ngOnInit() {
  }

}
