import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalculatorComponent } from 'src/exercises/calculator_display/calculator-display/calculator.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
