import { Component, NgZone, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Router } from '@angular/router';
import { FormControl,FormControlName,FormGroup,Validators ,FormBuilder} from '@angular/forms';
import { Location } from '@angular/common';
import { OwnerForCreation } from 'src/app/interface/ownerForCreation.model';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.scss']
})
export class OwnerCreateComponent implements OnInit {
  public ownerForm: FormGroup |any;
  private dialogConfig:any;

  constructor(public formBuilder:FormBuilder,private location:Location,private repository:RepositoryService, private dialog:MatDialog,private errorService:ErrorHandlerService) { }

  ngOnInit(){
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth:new FormControl(new Date()),
      address:new FormControl('', [Validators.required, Validators.maxLength(100)])
    });

    this.dialogConfig={
      height:'200px',
      width:'400px',
      disableClose:true,
      data:{}
    }
  }

  public hasError=(controlName:string,errorName:string)=>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

  public onCancel=()=>{
    this.location.back();
  }

  public createOwner=(ownerFormValue:any)=>{
    if(this.ownerForm.valid){
      this.executeOwnerCreation(ownerFormValue);
    }
  }

  public executeOwnerCreation=(ownerFormValue:any)=>{
    let owner:OwnerForCreation | any={
      name:ownerFormValue.name,
      dateOfBirth:ownerFormValue.dateOfBirth,
      address:ownerFormValue.address

    }
    let apiUrl = '/owners';
    
    this.repository.create(apiUrl,owner).subscribe(res=>{
      let dialogRef=this.dialog.open(SuccessDialogComponent,this.dialogConfig);

      dialogRef.afterClosed().subscribe(result=>{
       this.location.back();
      });
    },
    (error=>{
     this.errorService.dialogConfig={...this.dialogConfig};
     this.errorService.handleError(error);
    }))
  }

  // constructor(public formBuilder: FormBuilder,private router:Router,private ngZone:NgZone,private repository:RepositoryService){
  //   this.ownerForm=this.formBuilder.group({
  //     name:[''],
  //     dateOfBirth:[''],
  //     address:['']
  //   })
  // }

  // ngOnInit(){
  // }

  // onSubmit(){
  //   this.repository.AddOwner(this.ownerForm.value).subscribe(()=>{
  //     console.log('Data added successfully!')
  //     this.ngZone.run(()=> this.router.navigateByUrl('owner-list'));
  //   },(err)=>{
  //     console.log(err);
  //   });
  // }
}
