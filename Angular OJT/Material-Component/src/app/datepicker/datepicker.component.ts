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
export class DatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
