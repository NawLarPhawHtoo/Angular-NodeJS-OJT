import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { RepositoryService } from 'src/app/shared/repository.service';
import { MatTableDataSource} from '@angular/material/table';
import { Owner } from 'src/app/interface/owner.model';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit,AfterViewInit {

  public displayedColumns=['name','dateOfBirth','address','update','delete'];
  public dataSource=new MatTableDataSource<Owner>();

  @ViewChild(MatSort) sort:MatSort | any;
  @ViewChild(MatPaginator) paginator:MatPaginator | any;


  constructor(private reposervice:RepositoryService) { }

  ngOnInit(): void {
    this.getAllOwners();
  }

  public getAllOwners=()=>{
    this.reposervice.getData('api/owner').subscribe(res=>{
      this.dataSource.data = res as Owner[];
    })
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

  }

  public redirectToUpdate=(id:string)=>{

  }
  public redirectToDelete=(id:string)=>{

  }


}
