import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForcastComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherForcastComponent;
  let fixture: ComponentFixture<WeatherForcastComponent>;
  let htmlElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherForcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    htmlElement = fixture.debugElement.nativeElement;
  });


  it('should be sunny on creation', ()=>{
    expect(component.isSunny).toBeTruthy();
    expect(component.message).toContain("Sunny");
  });

  it('value should be rainy after click', ()=>{
    component.change();
    expect(component.message).toContain("Rainy");
    var htmlMessage = htmlElement.querySelector('span').textContent;
    expect(htmlMessage).toContain("Sunny");
  });

  it('html message should be rainy after detectChanges', ()=>{
    component.change();
    fixture.detectChanges();
    var htmlMessage = htmlElement.querySelector('span').textContent;
    expect(htmlMessage).toContain("Rainy");
  });

});
