import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: any;
  password: any;
  formData: FormGroup | any

  constructor(private authService:AuthService , private router:Router) { }

  ngOnInit() {
    this.formData=new FormGroup({
      userName:new FormControl("admin"),
      password:new FormControl("admin")

    });
  }
  onClickSubmit(data:any){
    this.userName=data.userName;
    this.password=data.password;

    console.log("Login Page : " + this.userName);
    console.log("Login Page : " + this.password);


    this.authService.login(this.userName, this.password).subscribe(data =>{
      console.log("Is Login Success : " + data);

      if(data) this.router.navigate(['/expenses']);
    });
  }

}
