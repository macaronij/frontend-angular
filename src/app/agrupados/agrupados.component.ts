import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardarIdService } from '../guardar-id.service';

@Component({
  selector: 'app-agrupados',
  templateUrl: './agrupados.component.html',
  styleUrls: ['./agrupados.component.css']
})
export class AgrupadosComponent implements OnInit {

  sobremi:any;
  constructor(private idservice: GuardarIdService, private router:Router) { }

  ngOnInit(): void {
    if (this.idservice.id == undefined) {
      console.error("ERROR: id undefined, volviendo a perfil");
      this.router.navigate(['/elegir']);
    } 
    if (this.idservice.proyects == null) {
      console.log("no encontre guardado, voy a fetch");
      fetch("https://portfolio-v3d1.onrender.com/basededatos/abouts/"+this.idservice.id).then(
        data => data.json()
      ).then(
        data => {
          this.sobremi = data;
        }
      )
    } else {
      console.log("ya encontre guardado!");
      this.sobremi=this.idservice.abouts;
    }


  }

}
