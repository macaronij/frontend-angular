import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      correo:["", [Validators.email, Validators.required] ],
      mensaje:["",[Validators.required, Validators.minLength(8)]]
    })
  }


  get Nombre(){
    return this.form.get("nombre");
  }
  get Correo(){
    return this.form.get("correo");
  }
  get Mensaje(){
    return this.form.get("mensaje");
  }

  enviando(event: Event) {
    console.log(this.form.value.nombre)
    if (this.Nombre) {
      console.log(this.Nombre.errors)
    }
  }
  



}
