import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardarIdService } from '../guardar-id.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion:any;
  constructor(private idservice:GuardarIdService, private router:Router) { }

  ngOnInit(): void {
    if (this.idservice.id == undefined) {
      console.error("ERROR: id undefined, volviendo a perfil");
      this.router.navigate(['/elegir']);
    } 
    if (this.idservice.educations == null) {
      console.log("no encontre guardado, voy a fetch");
      fetch("https://portfolio-v3d1.onrender.com/basededatos/educations/"+this.idservice.id).then(
        data => data.json()
      ).then(
        data => {
          this.educacion = data;
        }
      )
    } else {
      console.log("ya encontre guardado!");
      this.educacion = this.idservice.educations;
    }

  }

}
