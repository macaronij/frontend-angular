import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardarIdService } from '../guardar-id.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos:any;
  constructor(private idservice: GuardarIdService, private router:Router) { }

  ngOnInit(): void {
    if (this.idservice.id == undefined) {
      console.error("ERROR: id undefined, volviendo a perfil");
      this.router.navigate(['/elegir']);
    } 
    if (this.idservice.proyects == null) {
      console.log("no encontre guardado, voy a fetch");
      fetch("https://portfolio-v3d1.onrender.com/basededatos/proyects/"+this.idservice.id).then(
        data => data.json()
      ).then(
        data => {
          this.proyectos = data;
        }
      )
    } else {
      console.log("ya encontre guardado!");
      this.proyectos = this.idservice.proyects;
    }

  }

}
