import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WindowOpenerService } from '../window-opener.service';

import { WeatherWithServiceComponent } from './weather-with-service.component';

describe('WeatherWithServiceComponent', () => {
  let component: WeatherWithServiceComponent;
  let fixture: ComponentFixture<WeatherWithServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherWithServiceComponent],
      providers: [WindowOpenerService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be sunny on creation', () => {
    expect(component.isSunny).toBeTruthy();
  });

  it('should be sunny after an await', async () => {
    await component.getIsItSunnyAsync();
    expect(component.isSunny).toBeTruthy();
  });

  it('should be sunny after a promise', () => {
    component.getIsItSunnyAsync()
      .then(() => {
        expect(component.isSunny).toBeTruthy();
      })
  });
});
