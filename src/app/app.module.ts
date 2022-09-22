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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
