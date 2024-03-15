import { Component, input } from '@angular/core';
import { log } from 'console';
import { TestServiceService } from '../../test-service.service';
@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
})
export class WeatherCardComponent {
  constructor(public TestServiceService: TestServiceService) {}

  typeTemp: string = '';

  ngOnInit(): void {
    this.getWeatherData();
    this.TestServiceService.type$.subscribe((typeTemp) => {
      console.log('Type Card : ', typeTemp);
      this.typeTemp = typeTemp;
    });
  }

  now = new Date();

  mins = this.now.getMinutes().toString().padStart(2, '0');
  hours = this.now.getHours().toString().padStart(2, '0');

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

  timezoneOffsetSec: number = 19800;

  timezoneOffsetMs: number = this.timezoneOffsetSec * 1000;

  localTimeMs: number = this.now.getTime() + this.timezoneOffsetMs;

  localTime: Date = new Date(this.localTimeMs);

  // Format the local time as desired (e.g., HH:mm)
  formattedLocalTime: string = `${this.localTime
    .getHours()
    .toString()
    .padStart(2, '0')}:${this.localTime
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  unixTimestamp = 1710291781 * 1000;
  dat = new Date(this.unixTimestamp);
  sunrise = this.dat.toLocaleString(); // Adjust formatting as needed

  //==========================================================================================================================
  apikey = '1ccbda8b761658c716c51b4287213df7';
  city = 'New Delhi';
  units = 'metric';
  url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}&units=${this.units}`;

  cityName: string = '';
  weather: string = '';
  temp: number = 0;
  humidity: number = 0;
  wind: number = 0;
  pressure: number = 0;
  feels_like: number = 0;
  // link: string = `https://www.accuweather.com/en/in/${this.city}/204848/daily-weather-forecast/204848`;

  async getWeatherData() {
    const response = await fetch(this.url);
    let data = await response.json();
    // console.log(data);

    if (data.cod === 404) {
      return;
    }
    this.cityName = data.name;
    // console.log(this.cityName);
    // this.onCitySelected.emit(this.cityName);

    this.temp = data.main.temp;
    // console.log(this.temp);
    this.feels_like = data.main.feels_like;

    this.humidity = data.main.humidity;
    // console.log(this.humidity);

    this.wind = data.wind.speed;
    // console.log(this.wind);

    this.weather = data.weather[0].main;

    this.pressure = data.main.pressure;
    // console.log(this.type);
  }

  RoundtheNum(num: number): number {
    return Math.ceil(num);
  }

  tempCity: string = '';

  SearchCity(val: string) {
    if (this.city === val || !val.trim()) {
      return;
    }

    this.tempCity = val;
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.tempCity}&appid=${this.apikey}&units=${this.units}`;

    this.getWeatherData();
    this.city = this.tempCity;
  }
}
