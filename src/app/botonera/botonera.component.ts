import { Component, OnInit } from '@angular/core';
import { DatosPersonaService } from '../datos-persona.service';
import { GuardarIdService } from '../guardar-id.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {

  constructor(private idservice:GuardarIdService, private data:DatosPersonaService) { }


  ngOnInit(): void {
  }
}
