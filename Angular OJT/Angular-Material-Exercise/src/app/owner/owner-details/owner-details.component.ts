import { Component, NgZone, OnInit } from '@angular/core';
import { Owner } from 'src/app/interface/owner.model';
import { ActivatedRoute,Router } from '@angular/router';
import { RepositoryService } from 'src/app/shared/repository.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { FormGroup,FormBuilder, Form } from '@angular/forms';
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss']
})
export class OwnerDetailsComponent implements OnInit {
  public owner: Owner | any;
  public showAccounts:any;
  

  getId:any;
  updateForm:FormGroup | any;

  constructor( public formBuilder:FormBuilder,private repository:RepositoryService,private router:Router,private activateRoute:ActivatedRoute,private errorHandler:ErrorHandlerService,private ngZone:NgZone) { 
    this.getId = this.activateRoute.snapshot.paramMap.get('id');

    // this.repository.GetOwner(this.getId).subscribe(res=>{
    //   this.updateForm.setValue({
    //     name:res['name'],
    //     dateOfBirth:res['dateOfBirth'],
    //     address:res['address']
    //   });
    // });

    // this.updateForm=this.formBuilder.group({
    //   name:[''],
    //   dateOfBirth:[''],
    //   address:['']
    // })
  }

  ngOnInit() {
    this.getOwnerDetails();
  }

  private getOwnerDetails=() =>{
    let id:string=this.activateRoute.snapshot.params['id'];
    let apiUrl:string=`api/owners/${id}/account`;

    // this.repository.updateOwner().subscribe(res=>{
    //   this.owner=res as Owner;
    // },
    // (error)=>{
    //   this.errorHandler.handleError(error);
    // });
  }

  // onUpdate():any{
  //   this.repository.updateOwner(this.getId,this.updateForm.value).subscribe(()=>{
  //     console.log('Data updated successfully!')
  //     this.ngZone.run(()=>{
  //       this.router.navigateByUrl('/owner-list')
  //     })
  //   },(err)=>{
  //     console.log(err);
  //     this.errorHandler.handleError(err);
  //   });
  // }


}
