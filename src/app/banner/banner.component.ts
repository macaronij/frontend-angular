import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardarIdService } from '../guardar-id.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  nombre:any;
  id:any;
  profesion:any;
  foto:any;

  constructor(private router: Router, private idservice:GuardarIdService) { }

  ngOnInit(): void {
    if (this.idservice.id == undefined) {
      console.error("ERROR: id undefined, volviendo a perfil");
      this.router.navigate(['/elegir']);
      
    } else {
      this.id = this.idservice.id;
      this.nombre = this.idservice.nombre;
      this.foto = this.idservice.foto;
      this.profesion = this.idservice.profesion;
    }
    this.buscarServidor();
  }

  async buscarServidor() {
    fetch("https://portfolio-v3d1.onrender.com/basededatos/abouts/"+this.id)
    .then(data => data.json())
    .then(data => {
      this.idservice.abouts = data;
      console.log("Guardado abouts");
      }
    )

    fetch("https://portfolio-v3d1.onrender.com/basededatos/educations/"+this.id)
    .then(data => data.json())
    .then(data => {
      this.idservice.educations = data;
      console.log("Guardado educations");
      }
    )

    fetch("https://portfolio-v3d1.onrender.com/basededatos/proyects/"+this.id)
    .then(data => data.json())
    .then(data => {
      this.idservice.proyects = data;
      console.log("Guardado proyects");
      }
    )
  }

}

