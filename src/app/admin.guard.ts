import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor( private router:Router){}
  canActivate(){

   let token= localStorage.getItem('token')
   if (token){
   let data= JSON.parse(window.atob(token.split('.')[1]))
  
   if (data.role === 'administrateur') {
    return true;
  } else {
    this.router.navigate(['/login']); 
    return false;
  }
} else {
  this.router.navigate(['/login']); 
  return false;
}
}

}
