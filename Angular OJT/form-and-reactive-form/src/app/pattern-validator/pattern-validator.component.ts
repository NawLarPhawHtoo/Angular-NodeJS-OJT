import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms"

@Component({
  selector: 'app-pattern-validator',
  templateUrl: './pattern-validator.component.html',
  styleUrls: ['./pattern-validator.component.scss']
})
export class PatternValidatorComponent implements OnInit {

  requiredForm: FormGroup |any;

  constructor(private fb:FormBuilder) {
    this.myForm();
   }
   myForm(){
    this.requiredForm=this.fb.group({
      email:['',[Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });
   }

  ngOnInit(): void {
  }

}
