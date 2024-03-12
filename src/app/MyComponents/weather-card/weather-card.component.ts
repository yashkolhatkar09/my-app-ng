import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
})
export class WeatherCardComponent {
  constructor() {}

  ngOnInit(): void {
    this.getWeatherData();
  }

  now = new Date();

  mins = this.now.getMinutes();
  hours = this.now.getHours() % 12 || 12;
  dayOfWeek = this.now.getDay();
  date = this.now.getDate();
  month = this.now.getMonth();
  year = this.now.getFullYear() - 2000;

  weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  mothName = this.months[this.month];
  weekdayName = this.weekdays[this.dayOfWeek];

    // updateTime(): void {
  //   this.mins = this.now.getMinutes();
  //   this.hours = this.now.getHours() % 12 || 12;
  // }
  // todo : update every mins!!
  // intervalId: NodeJS.Timeout = setInterval(this.updateTime, 60000);

//==========================================================================================================================
  apikey = '1ccbda8b761658c716c51b4287213df7';
  city = 'pune';
  units = 'metric';
  url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}&units=${this.units}`;

  cityName: string = '';
  weather: string = '';
  temp: number = 0;
  humidity: number = 0;
  wind: number = 0;


  async getWeatherData() {
    const response = await fetch(this.url);
    let data = await response.json();
    console.log(data);

    this.cityName = data.name;
    console.log(this.cityName);

    this.temp = data.main.temp;
    console.log(this.temp);

    this.humidity = data.main.humidity;
    console.log(this.humidity);

    this.wind = data.wind.speed;
    console.log(this.wind);

    this.weather = 'Clear';
  }

  img = `src/assets/Images/${this.weather}.jpg`;

  RoundtheTemp(): number {
    return Math.ceil(this.temp);
  }
}
