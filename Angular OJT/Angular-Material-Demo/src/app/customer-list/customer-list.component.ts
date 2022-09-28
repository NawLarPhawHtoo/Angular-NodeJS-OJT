import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { Customer } from '../customer';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  loading=true;

  customers:Customer[]=[
    {
      id:1,
      name: 'Customer 001',
      job:'Programmer'
    },
    {
      id:2,
      name: 'Customer 002',
      job:'Programmer'
    },
    {
      id:3,
      name: 'Customer 003',
      job:'Programmer'
    },
  ];

  dataSource=new MatTableDataSource<Customer>(this.customers);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns  = ['id', 'name', 'job', 'operations'];


  constructor(public snackbar:MatSnackBar) { }

  deleteCustomer(id:number){
    let snackBarRef=this.snackbar.open(`Deleting  customer #${id}`);

  }
  editCustomer( id: number){
    let snackBarRef=this.snackbar.open(`Editing  customer #${id}`);

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading=false;
    },2000);
  }
 

  ngAfterViewInit() {
    this.dataSource.paginator  =  this.paginator;
    this.dataSource.sort = this.sort;
}

}
