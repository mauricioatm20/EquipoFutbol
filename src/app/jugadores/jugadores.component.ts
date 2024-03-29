import {Component, OnInit} from '@angular/core';
import {Jugador} from "../jugador.model";
import {CommonModule} from "@angular/common";
import {GameComponent} from "../game/game.component";

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule, GameComponent],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css'
})
export class JugadoresComponent {
  Club= "Pacifico";


}
