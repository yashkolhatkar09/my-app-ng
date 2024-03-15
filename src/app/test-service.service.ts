import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { WeatherCardComponent } from './MyComponents/weather-card/weather-card.component';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  // constructor(public WeatherCardComponent: WeatherCardComponent) {}

  typeTemp = new BehaviorSubject<string>('');
  type$ = this.typeTemp.asObservable();

  public setTempType(type: string) {
    // console.log(type, 'Service');
    this.typeTemp.next(type);
    // this.getTempType();
  }

  public getTempType() {
    return this.typeTemp.getValue();
  }

  // public data = 'Hello I am Service';
}
