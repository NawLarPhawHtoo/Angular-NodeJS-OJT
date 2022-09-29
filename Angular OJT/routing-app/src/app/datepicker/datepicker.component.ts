import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms"

const today=new Date();
const month=today.getMonth();
const year=today.getFullYear();

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent{

  campaignOne=new FormGroup({
    start:new FormControl(new Date(year,month,13)),
    end:new FormControl(new Date(year,month,16))
  });

  campaignTwo=new FormGroup({
    start:new FormControl(new Date(year,month,15)),
    end:new FormControl(new Date(year,month,19))
  });

  constructor() { }

}
