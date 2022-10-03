import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ReactiveTestComponent } from './reactive-test/reactive-test.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { PatternValidatorComponent } from './pattern-validator/pattern-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ReactiveTestComponent,
    FormValidationComponent,
    PatternValidatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
