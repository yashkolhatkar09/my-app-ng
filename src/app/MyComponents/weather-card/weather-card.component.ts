import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent {
  lat = 0;
  lon = 0;
  parsed: any;

  getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log('Latitude:', latitude);
            console.log('Longitude:', longitude);

            this.lat = latitude;
            this.lon = longitude;

            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          }
        );
      }
    });
  };

  apikey = 'b5a97ed6ab6e4075b65135141240903';

  getAPI = async () => {
    try {
      let api = `https://api.weatherapi.com/v1/current.json?key=${this.apikey}&q=${this.lat},${this.lon}`;
      let response = await fetch(api);
      this.parsed = await response.json();
      this.updateWeatherData();
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  constructor() {
    this.getCurrentLocation().then(() => {
      this.getAPI();
    });
  }

  img: string = '';
  weather: string = '';
  humidity: number = 0;
  summary: string = '';
  location: string = '';
  wind: number = 0;
  updateWeatherData() {
    this.img = `../../../assets/Images/${this.parsed.current.condition.text}.jpg`;
    this.weather = this.parsed.current.condition.text;
    this.humidity = this.parsed.current.humidity;
    this.summary = this.parsed.current.condition.text;
    this.location = this.parsed.location.name;
    this.wind = this.parsed.current.wind_kph;
  }
}
