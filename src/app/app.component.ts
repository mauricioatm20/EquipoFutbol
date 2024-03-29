import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
import {JugadoresComponent} from "./jugadores/jugadores.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, JugadoresComponent],
  templateUrl: './app.component.html',
  styles: '',
})
export class AppComponent {

}
