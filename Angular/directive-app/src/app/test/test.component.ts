import { Component, OnInit } from '@angular/core';

import { User } from '../user';

import { Observable,Observer } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  // template:`
  // <div style="text-align:center">
  // <h3>Currency Pipe </h3>
  // <p>{{ price | currency:'EUR':true}}</p>
  // <p>{{ price | currency:'INR'}}</p>
  // </div>
  // `,
  template:`
  <div style="text-align:center">
  <p>DigitCount Pipe</p>
  <h1>{{ digits | digitcount }} </h1>
  </div>
  `,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  
  //ngIfElse
  isLogIn:boolean=false;
  isLogOut:boolean=true;

  //ngFor
  list=[1,2,3,4,5];

  //trackBy
  studentArr:any[]=[{
    "id":1,
    "name":"student1"
  },
{
  "id":2,
  "name":"student2"
},
{
  "id":3,
  "name":"student3"
},
{
  "id":4,
  "name":"student4"
}];
trackByData(index:number,studentArr:any):number{
  return studentArr.id;
}
//ngSwitch
logInName='admin';

users:User[]=[
  {
    "userId":1,
    "userName":'User1'
  },
  {
    "userId":2,
    "userName":'User2'
  },
];

//adding parameter in pipe
presentDate=new Date();

//Build-in Pipes of Async Pipe
 timeChange=new Observable<string>((observer:Observer<string>)=>{
  setInterval(()=>observer.next(new Date().toString()),1000);
 });

  constructor() { }

//  price:number=20000;
digits:number=100

  ngOnInit() {
  }

}
