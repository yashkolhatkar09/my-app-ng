import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbrComponent } from './MyComponents/navbr/navbr.component';
import { WeatherCardComponent } from './MyComponents/weather-card/weather-card.component';
import { FooterComponent } from './MyComponents/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbrComponent,
    WeatherCardComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app-ng';
}