import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { log } from 'console';

@Component({
  selector: 'app-forecast-card',
  standalone: true,
  imports: [],
  templateUrl: './forecast-card.component.html',
  styleUrl: './forecast-card.component.css',
})
export class ForecastCardComponent {
  @Input() data: string = '';
}
