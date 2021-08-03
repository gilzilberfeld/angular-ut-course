import { Component, OnInit } from '@angular/core';
import { WindowOpenerService } from '../window-opener.service';

@Component({
  selector: 'app-weather-with-service',
  templateUrl: './weather-with-service.component.html',
  styleUrls: ['./weather-with-service.component.css']
})
export class WeatherWithServiceComponent implements OnInit {
  windowService: WindowOpenerService;
  isSunny: any;

  constructor(windowOpener : WindowOpenerService) { 
    this.windowService = windowOpener;
  }

  ngOnInit(): void {
    this.isSunny = this.windowService.isItSunny();
  }

  async getIsItSunnyAsync() : Promise<void> {
    await this.windowService.isItSunnyAsync();
  }
  
  change(){
    
  }


}
