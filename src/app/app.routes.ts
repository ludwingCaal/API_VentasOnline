import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
<<<<<<< HEAD
import { LoginComponent } from "./components/login/login.component";
import { CategoriasComponent } from "./components/categorias/categorias.component";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { ComprasComponent } from "./components/compras/compras.component";
import { DetalleComprasComponent } from "./components/detalle-compras/detalle-compras.component";
import { DetalleFacturasComponent } from "./components/detalle-facturas/detalle-facturas.component";
import { FacturasComponent } from "./components/facturas/facturas.component";
import { InventariosComponent } from "./components/inventarios/inventarios.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { ProveedoresComponent } from "./components/proveedores/proveedores.component";
import { TipoEmpaquesComponent } from "./components/tipo-empaques/tipo-empaques.component";
import { AuthguardGuard } from "./components/login/guards/authguard.guard";
import { ProductoFormComponent } from "./components/productos/producto-form/producto-form.component";
import { CategoriaFormComponent } from "./components/categorias/categoria-form/categoria-form.component";

const APP_ROUTES: Routes=[
    {path:'home', component:HomeComponent, canActivate:[AuthguardGuard]},
    {path:'login', component:LoginComponent},
    {path:'categorias', component:CategoriasComponent},
    {path:'clientes', component:ClientesComponent},
    {path:'compras', component:ComprasComponent},
    {path:'detalleCompras', component:DetalleComprasComponent},
    {path:'detalleFacturas', component:DetalleFacturasComponent},
    {path:'facturas', component:FacturasComponent},
    {path:'inventarios', component:InventariosComponent},
    {path:'productos', component:ProductosComponent, canActivate:[AuthguardGuard]},
    {path:'productoCreacion', component:ProductoFormComponent,canActivate:[AuthguardGuard]},
    {path:'productoCreacion/:id', component:ProductoFormComponent,canActivate:[AuthguardGuard]},
    {path:'proveedores', component:ProveedoresComponent},
    {path:'tipoEmpaques', component:TipoEmpaquesComponent, canActivate:[AuthguardGuard]},
    {path:'categoriaCreacion', component:CategoriaFormComponent, canActivate:[AuthguardGuard]},
=======
import { CategoriasComponent } from "./components/categorias/categorias.component";
import { TipoEmpaquesComponent } from "./components/tipo-empaques/tipo-empaques.component";

const APP_ROUTES: Routes=[
    {path:'home', component:HomeComponent},
    {path:'categorias', component:CategoriasComponent},
    {path:'tipoEmpaques', component:TipoEmpaquesComponent},
>>>>>>> 24c460a5487adcdc9ee8c8454717fdfdcba845b9
    {path:'home', pathMatch:'full', redirectTo:'home'}
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES, {useHash:true});