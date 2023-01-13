import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { GuardarIdService } from '../guardar-id.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  ngOnInit(): void {
  }
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private serviceid:GuardarIdService, private router: Router) {
    this.form = this.formBuilder.group({
      id: [this.serviceid.id, [] ],
      nombre: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(42)]],
      email:["", [Validators.email, Validators.required] ],
      mensaje:["",[Validators.required, Validators.minLength(8)]]
    })
  }


  get Nombre(){
    return this.form.get("nombre");
  }
  get Email(){
    return this.form.get("email");
  }
  get Mensaje(){
    return this.form.get("mensaje");
  }

  enviando(data: any) {
    // console.log(this.form.value.nombre)
    if ((this.Nombre && this.Nombre.errors)||(this.Email&&this.Email.errors)) {
      console.log("Se encontraron errores, no enviando el mensaje");
    } else {
      this.router.navigate(['/botonera']);
      console.log("Enviado un mesaje a "+this.serviceid.nombre+" de parte de "+this.form.value.nombre)
      let url = "https://portfolio-v3d1.onrender.com/cargando/message";
      let datos = {nombre: data.nombre, id : data.id, email : data.email, mensaje : data.mensaje};
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
          console.log("mensaje enviado: \n "+resp);
        } else {
          console.log("no enviado: \n "+resp);
        }
      })
    }
  }
  

  



}
