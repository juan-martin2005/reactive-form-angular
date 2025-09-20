import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulaio } from "./formulaio/formulaio";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formulaio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('S4_Gonzales_Juan');
}
