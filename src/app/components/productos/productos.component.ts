import { Component, OnInit } from '@angular/core';
import { ProductoService } from './services/producto.service';
import { Producto } from './producto';
import Swal from 'sweetalert2';
import { switchAll } from 'rxjs/operators';
import { ModalProductoService } from './modal-producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:any[];
  productoSeleccionado:Producto;
  tipo:string;
  //id: number;

  constructor(private productoService: ProductoService, private modalProductoService:ModalProductoService) {
    this.productoService.getProductos().subscribe((data:any)=>{this.productos=data});
   }

  ngOnInit() {
    this.modalProductoService.notificarCambio.subscribe(producto=>{
      if(this.tipo==='new'){
        this.productos.push(producto);
      }else if(this.tipo ==='update'){
        this.productos=this.productos.map(productoOriginal=>{
          if(producto.codigoProducto === productoOriginal.codigoProducto){
            productoOriginal = producto;
          }
          return productoOriginal;
        });
      }
    });
  }

  delete(producto:Producto):void{
    Swal.fire({
      title: 'Eliminar Producto',
      text:'Está seguro de eliminar el registro?',
      type: 'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085D6',
      cancelButtonColor: '#D33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass:'btn btn-danger',
      buttonsStyling:false,
      reverseButtons:true})
      .then((result)=>{
        this.productoService.delete(producto.codigoProducto).subscribe(
          ()=>{
            this.productos=this.productos.filter(prod=>prod!==producto);
            Swal.fire('producto eliminado!', `Producto ${producto.descripcion} eliminado con éxito!`, 'success');
          }
        );
      });
  }

  abrirModal(producto?: Producto){
    if(producto){
      this.productoSeleccionado=producto;
      this.tipo='update';
    }else{
      this.tipo='new';
      this.productoSeleccionado=new Producto();
    }
    this.modalProductoService.abrirModal();
  }
}
