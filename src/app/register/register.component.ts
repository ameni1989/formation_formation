import { Component } from '@angular/core';
import { AuthentifService } from '../authentif.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor (private _auth:AuthentifService, private router:Router){}
  user={
    name:"",
    lastname:"",
    email:"",
    password:"",
    telephone:""
  }
signup(){

  this._auth.register(this.user)
  .subscribe ({
next:(res)=>{
  alert ('Vous etes bien inscri')
  this.router.navigate (['/login'])
}
  })
 
}
}
