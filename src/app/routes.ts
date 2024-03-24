import { Routes } from '@angular/router';
import { WeatherCardComponent } from './MyComponents/weather-card/weather-card.component';
import { AlertComponent } from './MyComponents/alert/alert.component';
import { AboutComponent } from './MyComponents/about/about.component';

const routeConfig: Routes = [
  { path: '', redirectTo: 'weather-card', pathMatch: 'full' }, // Default route
  { path: '', component: WeatherCardComponent, title: 'Home Page' }, // Route to WeatherCardComponent
  { path: 'alert', component: AlertComponent }, // Route to AlertComponent
  { path: 'about', component: AboutComponent }, // Route to AboutComponent
];

export default routeConfig;
