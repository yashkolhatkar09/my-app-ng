import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbrComponent } from './MyComponents/navbr/navbr.component';
import { WeatherCardComponent } from './MyComponents/weather-card/weather-card.component';
import { AlertComponent } from './MyComponents/alert/alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbrComponent, WeatherCardComponent, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedCity: string = ''; // Initialize selectedCity property
  // showalrt = `<app-alert></app-alert>`;
  // title = 'WeatherWise';
}
