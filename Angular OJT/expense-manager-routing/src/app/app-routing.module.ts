import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { ExpenseGuard } from './expense.guard';

const routes: Routes = [
  {
    path:'login', component: LoginComponent,
  },
  {
    path:'logout', component: LogoutComponent,
  },
  {
    path: 'expenses', component: ExpenseEntryListComponent, canActivate:[ExpenseGuard]
  },
  {
    path: 'expenses/detail/:id', component: ExpenseEntryComponent,canActivate:[ExpenseGuard]
  },
  {
    path:'',redirectTo:'expenses',pathMatch:'full'
  },
 
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
