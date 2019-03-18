import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWeatherAppComponent } from './angular-weather-app.component';

describe('AngularWeatherAppComponent', () => {
  let component: AngularWeatherAppComponent;
  let fixture: ComponentFixture<AngularWeatherAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularWeatherAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWeatherAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
