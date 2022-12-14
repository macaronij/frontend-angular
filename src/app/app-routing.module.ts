import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgrupadosComponent } from './agrupados/agrupados.component';
import { BotoneraComponent } from './botonera/botonera.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EducacionComponent } from './educacion/educacion.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  {path: "botonera", component:BotoneraComponent},
  {path: "contacto", component:ContactoComponent},
  {path: "educacion", component:EducacionComponent},
  {path: "agrupados", component:AgrupadosComponent},
  {path: "proyectos", component:ProyectosComponent},
  {path: "", component:BotoneraComponent},
  {path: "**", component:Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
