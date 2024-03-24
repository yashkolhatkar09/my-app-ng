import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbrComponent } from './MyComponents/navbr/navbr.component';
import { WeatherCardComponent } from './MyComponents/weather-card/weather-card.component';
import { AlertComponent } from './MyComponents/alert/alert.component';
import { RouterModule } from '@angular/router';
// import { AboutComponent } from './MyComponents/about/about.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbrComponent,
    WeatherCardComponent,
    AlertComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
