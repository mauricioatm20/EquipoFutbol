import { Component } from '@angular/core';
import {Jugador} from "../jugador.model";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      @for (jugador of jugadores; track jugador.id){
        <li>{{jugador.nombre}}</li>

        <ul>
          <li>Id: {{jugador.id}}</li>
          <li>Edad: {{jugador.edad}}</li>
          <li>Posición: {{jugador.posicion}}</li>
        </ul>
      }
    </ul>
  `,
  styles: ``
})
export class GameComponent {
  jugadores =[
    {id:1, nombre: "Jorge", edad: 32, posicion: "portero"},
    {id:4, nombre: "Leo", edad: 31, posicion: "Medio"},
    {id:5, nombre: "Orlando", edad: 32, posicion: "Medio"},
    {id:7, nombre: "David", edad: 31, posicion: "Defensa"},
    {id:8, nombre: "Tibe", edad: 31, posicion: "Medio"},
    {id:9, nombre: "Alexis", edad: 31, posicion: "Delantero"},
  ];

}
