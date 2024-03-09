import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbrComponent } from './navbr.component';

describe('NavbrComponent', () => {
  let component: NavbrComponent;
  let fixture: ComponentFixture<NavbrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
