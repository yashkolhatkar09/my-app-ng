import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbrComponent } from './MyComponents/navbr/navbr.component';
import { WeatherCardComponent } from './MyComponents/weather-card/weather-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbrComponent, WeatherCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedCity: string = ''; // Initialize selectedCity property

  title = 'Weather Wise';
}
