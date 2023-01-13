import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardarIdService } from '../guardar-id.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  constructor(public idservice:GuardarIdService, private router:Router) { }

  ngOnInit(): void {
    if (this.idservice.id == undefined) {
      console.error("ERROR: id undefined, volviendo a perfil");
      this.router.navigate(['/elegir']);
    } 
  }


}
