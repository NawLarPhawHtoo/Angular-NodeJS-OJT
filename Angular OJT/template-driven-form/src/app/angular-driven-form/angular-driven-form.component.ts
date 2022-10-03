import { Component, OnInit } from '@angular/core';

export class User {
  public name!: string;
  public email!: string;
  public password!: string;
  public hobbies!: string;
}

@Component({
  selector: 'app-angular-driven-form',
  templateUrl: './angular-driven-form.component.html',
  styleUrls: ['./angular-driven-form.component.scss']
})

export class AngularDrivenFormComponent{

  model = new User();

  hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking'
  ];

  constructor() { }

  onSubmit(form: any) {
    console.log(form.value);
  }

}
