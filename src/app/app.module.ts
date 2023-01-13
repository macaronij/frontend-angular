import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { AgrupadosComponent } from './agrupados/agrupados.component';
import { EducacionComponent } from './educacion/educacion.component';
import { FooterComponent } from './footer/footer.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { BotoneraComponent } from './botonera/botonera.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElegirPersonaComponent } from './elegir-persona/elegir-persona.component';
import { GuardarIdService } from './guardar-id.service';
import { DatosPersonaService } from './datos-persona.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEduComponent } from './admin/admin-edu/admin-edu.component';
import { AdminMensajeComponent } from './admin/admin-mensaje/admin-mensaje.component';
import { AdminProComponent } from './admin/admin-pro/admin-pro.component';
import { AdminAgruComponent } from './admin/admin-agru/admin-agru.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    AgrupadosComponent,
    EducacionComponent,
    FooterComponent,
    Pagina404Component,
    BotoneraComponent,
    ContactoComponent,
    ProyectosComponent,
    ElegirPersonaComponent,
    LoginComponent,
    AdminComponent,
    AdminEduComponent,
    AdminMensajeComponent,
    AdminProComponent,
    AdminAgruComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [GuardarIdService, DatosPersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
