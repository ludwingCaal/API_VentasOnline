import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from "./../login/services/auth.service";
import { Router } from "@angular/router";
import swal from "sweetalert2";
=======
>>>>>>> 24c460a5487adcdc9ee8c8454717fdfdcba845b9

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

<<<<<<< HEAD
  constructor( private authService:AuthService, private router:Router) {
   }

  ngOnInit() {
  }
  logout():void{
    const username=this.authService.usuario.email;
    this.authService.logout();
    swal.fire('Logout', `Hola ${username}, has cerrado sesión con éxito!!!`, 'success');
    this.router.navigate(['/login']);

  }
=======
  constructor() { }

  ngOnInit() {
  }

>>>>>>> 24c460a5487adcdc9ee8c8454717fdfdcba845b9
}
