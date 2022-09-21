import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent{

  appName="My first app in Angular 8";

  showData($event:any){
    console.log("button is clicked!");
    if($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  //property binding
  userName:string="Peter";

  //class binding
  myCSSClass="red";
  applyCSSClass=false;

 //style binding
 myColor='brown';

  constructor() { }

  ngOnInit() {
  }

}
