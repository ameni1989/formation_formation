import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthoGuard implements CanActivate {
  constructor (private router:Router){}
  canActivate() {
    let token = localStorage.getItem('token');
  
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1]));
      if (data.exp > Date.now() / 1000) {
        return true;
      }
    }
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    return false;
  }
  
  
  }
  
