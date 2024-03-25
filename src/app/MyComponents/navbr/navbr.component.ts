import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TestServiceService } from '../../test-service.service';
@Component({
  selector: 'app-navbr',
  templateUrl: './navbr.component.html',
  styleUrls: ['./navbr.component.css'],
  standalone: true,
})
export class NavbrComponent implements OnInit {
  activeComponent: string = '';
  title = 'WeatherWise';
  temp = 'C';

  constructor(
    public TestServiceService: TestServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Get the first child route if available
        const firstChild = this.route.snapshot.firstChild;
        if (firstChild && firstChild.routeConfig) {
          // Access the routeConfig and then its path if available
          const currentRoute = firstChild.routeConfig.path;
          this.activeComponent = currentRoute || '';
        } else {
          // Handle the case when there's no first child or routeConfig
          this.activeComponent = '';
        }
      });
  }

  Changetemp() {
    this.temp = this.temp === 'C' ? 'F' : 'C';
    this.TestServiceService.setTempType(this.temp);
  }
}
