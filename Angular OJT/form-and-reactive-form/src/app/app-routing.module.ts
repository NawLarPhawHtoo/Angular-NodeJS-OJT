import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ReactiveTestComponent } from './reactive-test/reactive-test.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { PatternValidatorComponent } from './pattern-validator/pattern-validator.component';

const routes: Routes = [
  {
    path:'test', component:TestComponent
  },
  {
    path:'reactive-test', component:ReactiveTestComponent
  },
  {
    path:'form-validation', component:FormValidationComponent
  },
  {
    path:'pattern-validator', component:PatternValidatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
