import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonaService {

  constructor() { }

  nombre:any;
  
  buscarNombre(id:String) {
    fetch("localhost:8080/basededatos/persons/"+id).then(
      data => data.json()
    ).then(
      data => {
        console.log(this.nombre)
        return data.nombre;
      }
    )
  }
  

}
