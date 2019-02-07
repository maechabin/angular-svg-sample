import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppSVGComponent } from './app-svg.component';
import { AppSVG2Component } from './app-svg2.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSVGComponent,
    AppSVG2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppSVGComponent],
})
export class AppModule { }
