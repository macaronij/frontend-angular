import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardarIdService } from 'src/app/guardar-id.service';

@Component({
  selector: 'app-admin-mensaje',
  templateUrl: './admin-mensaje.component.html',
  styleUrls: ['./admin-mensaje.component.css']
})
export class AdminMensajeComponent implements OnInit {
  datos:any;
  mensajeStatus:Boolean=false;
  mensajeTexto:String="";

  constructor(public idservice: GuardarIdService, private router:Router) { }

  ngOnInit(): void {
    this.limpiarMensaje();

    if (this.idservice.id == undefined) {
      console.error("ERROR: id undefined, volviendo a perfil");
      this.router.navigate(['/elegir']);
    } 
    console.log("Admin seccion mensajes");
    this.datos = [];
    
    this.mensajeStatus=true;
    this.mensajeTexto="Base de datos...";
    fetch("https://portfolio-v3d1.onrender.com/basededatos/messages/"+this.idservice.id)
      .then(data => data.json())
      .then(data => {
        this.datos = data;
        this.limpiarMensaje();
      })
      .catch(Error => {
        this.mensajeStatus=true;
        this.mensajeTexto=Error;
      })
  }

  borrar(idABorrar:String) {
    this.mensajeStatus=true;
    this.mensajeTexto="Borrando linea...";
    fetch("https://portfolio-v3d1.onrender.com/basededatos/borrar/message/"+idABorrar).then(
      data => this.ngOnInit()
    ).catch(error => this.mensajeTexto=error);
  }

  limpiarMensaje() {
    this.mensajeStatus=false;
    this.mensajeTexto="";
  }

}
