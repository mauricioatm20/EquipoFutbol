import {Component, OnInit} from '@angular/core';
import {Jugador} from "../jugador.model";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css'
})
export class JugadoresComponent implements OnInit{

  jugadores: Jugador[] =[
    {id:1, nombre: "Jorge", edad: 32, posicion: "portero"},
    {id:4, nombre: "Leo", edad: 31, posicion: "Medio"},
    {id:5, nombre: "Orlando", edad: 32, posicion: "Medio"},
    {id:7, nombre: "David", edad: 31, posicion: "Defensa"},
    {id:8, nombre: "Tibe", edad: 31, posicion: "Medio"},
    {id:9, nombre: "Alexis", edad: 31, posicion: "Delantero"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
