import { Component } from '@angular/core';
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

  // ==============================================================================================================
  // *TIME
  now = new Date();
  hours: number = this.now.getHours(); // Convert hours to 12-hour format
  meridiem: string = this.AmorPm(this.hours);
  formattedHours: string = this.Makeit12hr(this.hours)
    .toString()
    .padStart(2, '0');
  minutes: string = this.now.getMinutes().toString().padStart(2, '0');
  timeIn12HourFormat: string =
    this.formattedHours + ':' + this.minutes + ' ' + this.meridiem;

  dayOfWeek = this.now.getDay();
  date = this.now.getDate();
  month = this.now.getMonth();
  year = this.now.getFullYear() - 2000;
  dayornight: string = '';

  Makeit12hr(hour: any) {
    return hour % 12 || 12;
  }
  AmorPm(hours: any) {
    return hours >= 12 ? 'PM' : 'AM';
  }
  DayorNight() {
    let hours: number = this.now.getHours();
    return hours >= 19 || hours < 7 ? 'Night' : 'Day';
  }
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
  timeInterval: any;

  calculateSunTime(timestamp: number, timezoneOffset: number): string {
    const milliseconds: number = timestamp * 1000;

    const date: Date = new Date(milliseconds);

    date.setUTCMinutes(date.getUTCMinutes() + timezoneOffset / 60);

    const hours: number = date.getUTCHours();
    const minutes: number = date.getUTCMinutes();

    let formattedHours: any = this.Makeit12hr(
      hours.toString().padStart(2, '0')
    );

    const formattedMinutes: string = minutes.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
  }

  updateTime() {
    this.ChangeMins();
    this.timeInterval = setInterval(() => {
      this.ChangeMins();
    }, 60000); // updates Time Every min
  }

  ChangeMins() {
    const now1 = new Date();
    this.minutes = now1.getMinutes().toString().padStart(2, '0');
    if (this.minutes == '00') {
      this.hours = now1.getHours();
      this.meridiem = this.AmorPm(this.hours);
      this.formattedHours = this.Makeit12hr(this.hours)
        .toString()
        .padStart(2, '0');
    }
    this.timeIn12HourFormat =
      this.formattedHours + ':' + this.minutes + ' ' + this.meridiem;
  }

  //=============================================================================================================================

  // *API
  ngOnInit(): void {
    // this.getWeatherData();
    this.TestServiceService.type$.subscribe();

    this.TestServiceService.type$.subscribe((typeTemp) => {
      this.typeTemp = typeTemp;
      this.units = this.typeTemp === 'C' ? 'metric' : 'imperial';
      this.windUnit = this.units === 'metric' ? 'km/h' : 'mph';
      this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}&units=${this.units}`;
      this.getWeatherData();
    });
  }

  apikey = '1ccbda8b761658c716c51b4287213df7';
  city = 'New Delhi';
  units = 'metric';
  url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}&units=${this.units}`;

  typeTemp: string = '';
  weather: string = '';
  temp: number = 0;
  humidity: number = 0;
  wind: number = 0;
  pressure: number = 0;
  feelslike: number = 0;
  windUnit: string = 'km/h';
  sunrise: string = '';
  sunset: string = '';
  img: string = '';
  gojo: string = '';
  gojoStyle: string = '';

  RoundtheNum(num: number): number {
    return Math.ceil(num);
  }

  async getWeatherData() {
    const response = await fetch(this.url);
    let data = await response.json();

    if (data.cod === 404 || !data.main || !data.main.temp) {
      this.TestServiceService.showAlertForDuration(2000); // alert messege
      return;
    }
    // console.log(data);

    if (this.city == 'Shibuya') {
      this.gojo = '';
      this.gojoStyle = '';
    }

    this.city = data.name;
    if (this.city == 'Shibuya') {
      this.gojo = '../../../assets/Images/Extras/Gojo.gif';
      this.gojoStyle =
        'margin-left: 7px;margin-right: -7px;margin-top: -12px;width: 40px';
    }
    this.temp = data.main.temp;
    this.feelslike = data.main.feels_like;
    this.humidity = data.main.humidity;
    this.wind = data.wind.speed;
    this.weather = data.weather[0].main;
    this.img = `../../../assets/Images/${this.DayorNight()}/${
      this.weather
    }.png`;
    this.pressure = data.main.pressure;
    this.sunrise = this.calculateSunTime(data.sys.sunrise, data.timezone);
    this.sunset = this.calculateSunTime(data.sys.sunset, data.timezone);

    this.updateTime();
  }

  LastCitySearched: string = '';

  SearchCity(val: string) {
    if (val.trim() === '' || this.LastCitySearched === val) {
      return;
    }

    this.LastCitySearched = val;

    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${this.apikey}&units=${this.units}`;
    this.getWeatherData();
  }
}
