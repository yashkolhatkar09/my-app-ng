import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbrComponent } from './MyComponents/navbr/navbr.component';
import { WeatherCardComponent } from './MyComponents/weather-card/weather-card.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { ForecastCardComponent } from './MyComponents/forecast-card/forecast-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbrComponent,
    WeatherCardComponent,
    FooterComponent,
    ForecastCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedCity: string = ''; // Initialize selectedCity property

  setCity(data: string) {
    this.selectedCity = data;
  }

  getCity() {
    return this.selectedCity;
  }

  title = 'my-app-ng';
}
