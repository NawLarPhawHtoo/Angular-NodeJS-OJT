import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DigitcountPipe } from './digitcount.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DigitcountPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
