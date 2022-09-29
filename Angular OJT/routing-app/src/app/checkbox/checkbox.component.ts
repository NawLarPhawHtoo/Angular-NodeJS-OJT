import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  checked: boolean = false;
  indeterminate: boolean = false;
  labelPosition:'before'| 'after'='after';
  disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
