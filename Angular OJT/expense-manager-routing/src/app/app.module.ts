import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { DebugComponent } from './debug/debug.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    ExpenseEntryListComponent,
    DebugComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule ,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
