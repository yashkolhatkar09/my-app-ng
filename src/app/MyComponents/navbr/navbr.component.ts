import { Component } from '@angular/core';
import { TestServiceService } from '../../test-service.service';
@Component({
  selector: 'app-navbr',
  standalone: true,
  imports: [],
  templateUrl: './navbr.component.html',
  styleUrl: './navbr.component.css',
})
export class NavbrComponent {
  constructor(public TestServiceService: TestServiceService) {}
  title = 'WeatherWise';
  temp = 'C';

  Changetemp() {
    this.temp = this.temp === 'C' ? 'F' : 'C';
    this.TestServiceService.setTempType(this.temp);
  }
}
