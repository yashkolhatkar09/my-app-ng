import { Injectable } from '@angular/core';
import { log } from 'console';
import { BehaviorSubject } from 'rxjs';
// import { WeatherCardComponent } from './MyComponents/weather-card/weather-card.component';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  constructor() {
    this.typeTemp.next('C');
  }

  typeTemp = new BehaviorSubject<string>('');
  type$ = this.typeTemp.asObservable();

  public setTempType(type: string) {
    this.typeTemp.next(type);
  }

  public getTempType() {
    return this.typeTemp.getValue();
  }
  // ====================================================================
  private alert: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public getAlert() {
    return this.alert.asObservable();
  }

  public showAlertForDuration(duration: number) {
    this.alert.next(true); // Show the alert
    setTimeout(() => {
      this.alert.next(false); // Hide the alert after the specified duration
    }, duration);
  }
}
