import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';
import { ExpenseEntryService } from '../expense-entry.service';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { getMatTooltipInvalidPositionError } from '@angular/material/tooltip';
@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.scss'],
})
export class ExpenseEntryComponent implements OnInit {
  title: string | undefined;
  expenseEntry$!: Observable<ExpenseEntry>;
  expenseEntry: ExpenseEntry = {} as ExpenseEntry;
  selectedId: number | any;
  constructor(
    private restService: ExpenseEntryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.title = 'Expense Entry';
    this.expenseEntry$=this.route.paramMap.pipe(
      switchMap((params)=>{
        this.selectedId = Number(params.get('id'));
        return this.restService.getExpenseEntry(this.selectedId);
      })
    );
    this.expenseEntry$.subscribe((data:any)=>{
      this.expenseEntry = data;
    });   
}
goToList(){
  this.router.navigate(['/expenses']);
}
}

