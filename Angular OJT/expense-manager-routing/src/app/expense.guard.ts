import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

  constructor(private authService: AuthService, private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

      let url:string=state.url;

    return this.checkLogin(url);
  }

  checkLogin(url:any): true | any  | UrlTree{
    console.log("Url: " + url);

    let val:any=localStorage.getItem('isUserLoggedIn');

    if(val != null && val=="true"){
      if(url=="/login"){
        this.router.parseUrl('/expenses');
      }else{
        return true;
      }
    }else{
      return this.router.parseUrl('/login');
    }

  }
  
}
