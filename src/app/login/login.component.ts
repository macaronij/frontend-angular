import { Component, OnInit } from '@angular/core';
import { GuardarIdService } from '../guardar-id.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre:any;
  id:any;
  form:any;
  mensajeError:Boolean=false;
  mensajeProcesando:Boolean=false;

  constructor(private router: Router, public idservice:GuardarIdService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: [this.idservice.nombre,[] ],
      id: [this.idservice.id, [] ],
      password: ["",[] ]
    })
   }

  ngOnInit(): void {
    if (this.idservice.id == undefined) {
      this.router.navigate(["/elegir"])
    }
    this.mensajeProcesando = false;
    this.mensajeError = false;
  }

  enviando(data:any) {
    this.mensajeProcesando = true;
    this.mensajeError = false;
    console.log("ENVIANDO LOGIN");

    let url = "https://portfolio-v3d1.onrender.com/basededatos/login";
    let datos = {nombre: data.nombre, id : data.id, password : data.password};
    console.log(datos);

    fetch(url, {
	    method: 'POST',
	    body: JSON.stringify(data),
	    headers:{
		    'Content-Type':'application/json'
      }
    }).then(res=>res.json())
    .catch(error=> console.error("ERROR: FALLO EL FETCH \n "+error))
    .then(resp => {
      if (resp == true) {
        console.log("Login APROBADO");
        this.router.navigate(['/admin123']);
      } else {
        this.mensajeProcesando = false;
        console.log("Login RECHAZADO");
        this.mensajeError = true;
      }
    })
  }

}
