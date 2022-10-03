import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { AngularDrivenFormComponent } from './angular-driven-form/angular-driven-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  {
    path:'hero-form',component: HeroFormComponent,
  },
  {
    path:'template-driven-form',
    pathMatch:'full',
    component: TemplateDrivenFormComponent
  },
  {
    path:'angular-driven-form',
    component: AngularDrivenFormComponent
  },
  {
    path:'signup-form',
    component: SignupFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
