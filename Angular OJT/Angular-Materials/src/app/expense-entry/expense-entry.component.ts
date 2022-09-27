import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.scss']
})
export class ExpenseEntryComponent implements OnInit {
  title:string | undefined;
  
  constructor() { }

  ngOnInit() {
    this.title='Expense Entry';
  }

}
