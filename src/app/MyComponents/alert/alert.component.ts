import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../../test-service.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'], // Corrected name to styleUrls
})
export class AlertComponent implements OnInit {
  constructor(public testService: TestServiceService) {}

  display: string = 'none'; // Initialize display property

  ngOnInit() {
    // Subscribe to the alert observable to update the display property
    this.testService.getAlert().subscribe((alertVisible: boolean) => {
      this.display = alertVisible ? 'block' : 'none';
    });
  }
}
