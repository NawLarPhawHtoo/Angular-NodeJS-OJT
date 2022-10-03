import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms"

@Component({
  selector: 'app-reactive-test',
  templateUrl: './reactive-test.component.html',
  styleUrls: ['./reactive-test.component.scss']
})
export class ReactiveTestComponent implements OnInit {

  userName: string | undefined;
  formdata:any;

  constructor() { }

  ngOnInit(): void {
    this.formdata=new FormGroup({
    userName:new FormControl("Tutorialspoint")
    });

  }
  onClickSubmit(data: any){
    this.userName=data.userName;
  }

}
