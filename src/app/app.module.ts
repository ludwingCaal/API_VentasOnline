import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { TipoEmpaquesComponent } from './components/tipo-empaques/tipo-empaques.component';
<<<<<<< HEAD
import { APP_ROUTING } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ComprasComponent } from './components/compras/compras.component';
import { DetalleComprasComponent } from './components/detalle-compras/detalle-compras.component';
import { DetalleFacturasComponent } from './components/detalle-facturas/detalle-facturas.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { InventariosComponent } from './components/inventarios/inventarios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { TokenInterceptor } from './components/login/interceptors/token.interceptor';
import { AuthInterceptor } from './components/login/interceptors/auth.interceptor';
import { ProductoFormComponent } from './components/productos/producto-form/producto-form.component';
import { EmailClienteComponent } from './components/email-cliente/email-cliente.component';
import { TelefonoProveedorComponent } from './components/telefono-proveedor/telefono-proveedor.component';
import { EmailProveedorComponent } from './components/email-proveedor/email-proveedor.component';
import { TelefonoClienteComponent } from './components/telefono-cliente/telefono-cliente.component';
import { CategoriaFormComponent } from './components/categorias/categoria-form/categoria-form.component';

=======
import { APP_ROUTING } from "./app.routes";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
>>>>>>> 24c460a5487adcdc9ee8c8454717fdfdcba845b9

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    CategoriasComponent,
<<<<<<< HEAD
    TipoEmpaquesComponent,
    LoginComponent,
    ClientesComponent,
    ComprasComponent,
    DetalleComprasComponent,
    DetalleFacturasComponent,
    FacturasComponent,
    InventariosComponent,
    ProductosComponent,
    ProveedoresComponent,
    ProductoFormComponent,
    EmailClienteComponent,
    TelefonoProveedorComponent,
    EmailProveedorComponent,
    TelefonoClienteComponent,
    CategoriaFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}
  ],
=======
    TipoEmpaquesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
>>>>>>> 24c460a5487adcdc9ee8c8454717fdfdcba845b9
  bootstrap: [AppComponent]
})
export class AppModule { }
