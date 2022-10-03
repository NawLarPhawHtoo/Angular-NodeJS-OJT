import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator,FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  requiredForm: FormGroup | any;

  constructor(private fb:FormBuilder) {
    this.myForm();
   }

   myForm(){
    this.requiredForm=this.fb.group({
      name:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

}
