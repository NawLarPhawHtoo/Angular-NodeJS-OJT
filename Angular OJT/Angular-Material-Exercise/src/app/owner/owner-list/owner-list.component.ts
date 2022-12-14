import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { RepositoryService } from 'src/app/shared/repository.service';
import { MatTableDataSource} from '@angular/material/table';
import { Owner } from 'src/app/interface/owner.model';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit,AfterViewInit {

  public displayedColumns=['name','dateOfBirth','address','details','update','delete'];
  public dataSource=new MatTableDataSource<Owner>();

  @ViewChild(MatSort) sort:MatSort | any;
  @ViewChild(MatPaginator) paginator:MatPaginator | any;


  constructor(private reposervice:RepositoryService,private errorService:ErrorHandlerService,private router:Router) { }

  ngOnInit(): void {
    this.getAllOwners();
  }

  public getAllOwners=()=>{
    this.reposervice.getData('api/owners').subscribe(res=>{
      this.dataSource.data = res as Owner[];
      console.log(res);
    },
    error => {
        this.errorService.handleError(error);
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort ;
    this.dataSource.paginator = this.paginator;

  }

  public customSort=(event:any)=>{
    console.log(event);
  }

  public doFilter=( value:string)=>{
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public redirectToDetails=(id:string)=>{
    let url:string=`/owner/details/${id}`;
    this.router.navigate([url]);
  }

  public redirectToUpdate=(id:string)=>{

  }
  public redirectToDelete=(id:string)=>{

  }
  
}
