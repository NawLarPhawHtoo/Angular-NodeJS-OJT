import { Component, OnInit } from '@angular/core';
import { addressModel } from '../address';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  countryData: any[] = ['India', 'US', 'UK','Myanmar'];

  model: addressModel = {
    address: '',
    city: '',
    state:'',
    postcode: null,
    country: null,
    aggrement:false
  };

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit() {
    console.log("Full Address", this.model);  
  }

}
