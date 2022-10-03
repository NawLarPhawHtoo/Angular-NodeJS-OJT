import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

   //Property for the gender
   public gender: string[]|any;
   //Property for the user
   public user!:User;
 
   ngOnInit() {
 
     this.gender =  ['Male', 'Female', 'Others'];
     //Create a new user object
     this.user = new User({email:"", password: { pwd: "" , confirmPwd: ""}, gender: this.gender[0], terms: false});
   }
 
    onFormSubmit({ value, valid}: { value: User, valid: boolean | any }) {
       this.user = value;
       console.log( this.user);
       console.log("valid: " + valid);
     }

}
