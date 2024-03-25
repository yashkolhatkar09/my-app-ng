import { Routes } from '@angular/router';
import { WeatherCardComponent } from './MyComponents/weather-card/weather-card.component';
import { AboutComponent } from './MyComponents/about/about.component';

export const routes: Routes = [
  { path: '', component: WeatherCardComponent }, // Default route to WeatherCardComponent
  { path: 'about', component: AboutComponent },
  // Add more routes here as needed
];
