import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppSVGComponent } from './app-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSVGComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppSVGComponent],
})
export class AppModule { }
