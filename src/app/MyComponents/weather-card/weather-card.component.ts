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
    // this.getWeatherData();
    this.TestServiceService.type$.subscribe();

    this.TestServiceService.type$.subscribe((typeTemp) => {
      this.typeTemp = typeTemp;
      this.units = this.typeTemp === 'C' ? 'metric' : 'imperial';
      this.windUnit = this.units === 'metric' ? 'km/h' : 'mph';
      // this.pressureUnit = this.units === 'metric' ? 'hPa' : 'psi';
      this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}&units=${this.units}`;
      this.getWeatherData();
    });
  }

  now = new Date();

  hours: number = this.now.getHours(); // Convert hours to 12-hour fo[rmat
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

    // let hours = 18;

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

  //==========================================================================================================================
  apikey = '1ccbda8b761658c716c51b4287213df7';
  city = 'New Delhi';
  units = 'metric';
  url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}&units=${this.units}`;

  weather: string = '';
  temp: number = 0;
  humidity: number = 0;
  wind: number = 0;
  pressure: number = 0;
  feels_like: number = 0;
  windUnit: string = 'km/h';
  // pressureUnit: string = 'hPa'; //*check
  sunrise: string = '';
  sunset: string = '';
  img: string = '';

  // link: string = `https://www.accuweather.com/en/in/${this.city}/204848/daily-weather-forecast/204848`;

  // async getWeatherData() {
  //   const response = await fetch(this.url);
  //   let data = await response.json();
  //   // console.log(data);

  //   if (data.cod === 404) {
  //     return;
  //   }

  //   this.temp = data.main.temp;

  //   // console.log(this.temp);
  //   this.feels_like = data.main.feels_like;

  //   this.humidity = data.main.humidity;
  //   // console.log(this.humidity);

  //   this.wind = data.wind.speed;
  //   // console.log(this.wind);

  //   this.weather = data.weather[0].main;
  //   this.img = `../../../assets/Images/${this.weather}.png`;

  //   this.pressure = data.main.pressure;

  //   this.sunrise = this.calculateSun(data.sys.sunrise);
  //   this.sunset = this.calculateSun(data.sys.sunset);
  // }

  RoundtheNum(num: number): number {
    return Math.ceil(num);
  }

  async getWeatherData() {
    try {
      const response = await fetch(this.url);
      let data = await response.json();

      if (data.cod === 404 || !data.main || !data.main.temp) {
        // console.error('Weather data not found or incomplete:', data);
        return false; // Return false to indicate failure
      }
      // console.log(data);

      // Process weather data as before

      this.city = data.name;
      this.temp = data.main.temp;
      this.feels_like = data.main.feels_like;
      this.humidity = data.main.humidity;
      this.wind = data.wind.speed;
      this.weather = data.weather[0].main;
      this.img = `../../../assets/Images/${this.DayorNight()}/${
        this.weather
      }.png`;
      this.pressure = data.main.pressure;
      this.sunrise = this.calculateLocalTime(data.sys.sunrise, data.timezone);
      this.sunset = this.calculateLocalTime(data.sys.sunset, data.timezone);

      // console.log(this.sunset);

      return true; // Return true to indicate success
    } catch (error) {
      // console.error('Error processing weather data:', error);
      return false; // Return false to indicate failure
    }
  }

  tempCity: string = '';

  SearchCity(val: string) {
    if (val.trim() === '' || this.city !== val) {
      return;
    }
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${this.apikey}&units=${this.units}`;
    this.getWeatherData();
  }

  calculateLocalTime(timestamp: number, timezoneOffset: number): string {
    // Convert the timestamp to milliseconds
    const milliseconds: number = timestamp * 1000;

    // Create a new Date object with the timestamp
    const date: Date = new Date(milliseconds);

    // Adjust the time based on the timezone offset
    date.setUTCMinutes(date.getUTCMinutes() + timezoneOffset / 60);

    // Extract hours and minutes
    const hours: number = date.getUTCHours();
    const minutes: number = date.getUTCMinutes();

    // Format the time
    let formattedHours: any = this.Makeit12hr(
      hours.toString().padStart(2, '0')
    );

    const formattedMinutes: string = minutes.toString().padStart(2, '0');
    // console.log(`${formattedHours}:${formattedMinutes}`);

    return `${formattedHours}:${formattedMinutes}`;
  }
}
