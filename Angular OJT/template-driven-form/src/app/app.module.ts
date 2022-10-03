import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { AngularDrivenFormComponent } from './angular-driven-form/angular-driven-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    TemplateDrivenFormComponent,
    AngularDrivenFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
