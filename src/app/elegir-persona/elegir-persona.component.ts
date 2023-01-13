import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardarIdService } from '../guardar-id.service';

@Component({
  selector: 'app-elegir-persona',
  templateUrl: './elegir-persona.component.html',
  styleUrls: ['./elegir-persona.component.css']
})
export class ElegirPersonaComponent implements OnInit {

  constructor(private idservice: GuardarIdService) { }
  // listaPersonas:any =[];
  personas : any;
  mensajeError :Boolean = false;


  ngOnInit(): void {
    console.log("iniciando...");
    this.mensajeError=false;
    
    this.idservice.id=undefined;
    this.idservice.nombre = undefined;
    this.idservice.foto = undefined;
    this.idservice.profesion = undefined;
    this.idservice.abouts = undefined;
    this.idservice.educations = undefined;
    this.idservice.proyects = undefined;

    this.buscarServidor();

  }
  
  async buscarServidor() {
    try {
      let personasJSON = await fetch("https://portfolio-v3d1.onrender.com/basededatos/persons");
      if (personasJSON.ok) {
        this.personas = await personasJSON.json();
        let x = 0;
        for await (let linea of this.personas) {
          console.log("trabajando en "+this.personas[x].nombre);
          let ctcJSON = await fetch("https://portfolio-v3d1.onrender.com/basededatos/contacts/"+linea.id);
          let ctc = await ctcJSON.json();
          // console.log(ctc[0]);
          console.log("Nombre: "+linea.nombre+" foto: "+ctc[0].foto);
          this.personas[x].foto = ctc[0].foto;
          this.personas[x].profesion = ctc[0].profesion;
          x++;
        }
      } else {
        console.log("Fallo el fetch !!!!!!!!!!!!!")
        this.mensajeError=true;
      }
    } catch (error:any) {
      console.log("Fallo el fetch !!!!!!!!!!!!!");
      console.log(error);
      this.mensajeError=true;
    }
  }
    


  guardarId(idNuevo:String, nombreNuevo:String, fotoNuevo:String, profesionNuevo:String) {
    console.log("intentando guardar nuevo id: "+idNuevo+" para persona "+nombreNuevo+" con foto "+fotoNuevo);
    this.idservice.id = idNuevo;
    this.idservice.nombre = nombreNuevo;
    this.idservice.foto = fotoNuevo;
    this.idservice.profesion = profesionNuevo;

  }

}
