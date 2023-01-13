import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAgruComponent } from './admin/admin-agru/admin-agru.component';
import { AdminEduComponent } from './admin/admin-edu/admin-edu.component';
import { AdminMensajeComponent } from './admin/admin-mensaje/admin-mensaje.component';
import { AdminProComponent } from './admin/admin-pro/admin-pro.component';
import { AdminComponent } from './admin/admin.component';

import { AgrupadosComponent } from './agrupados/agrupados.component';
import { BotoneraComponent } from './botonera/botonera.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ElegirPersonaComponent } from './elegir-persona/elegir-persona.component';
import { LoginComponent } from './login/login.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "proyectos123", component:AdminProComponent},
  {path: "agrupados123", component:AdminAgruComponent},
  {path: "mensaje123", component:AdminMensajeComponent},
  {path: "educacion123", component:AdminEduComponent},
  {path: "admin123", component:AdminComponent},
  

  {path: "elegir", component:ElegirPersonaComponent},
  {path: "botonera", component:BotoneraComponent},
  {path: "contacto", component:ContactoComponent},
  {path: "educacion", component:EducacionComponent},
  {path: "agrupados", component:AgrupadosComponent},
  {path: "proyectos", component:ProyectosComponent},
  
  {path: "", component:ElegirPersonaComponent},
  {path: "**", component:Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
