import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthentifService } from '../authentif.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data:any
token:any
result:any
  constructor ( private router:Router, private _autho:AuthentifService){}

  user={
    email:"",
    password:""
  }
 utilisateur:any
  login() {
  
    this._autho.login(this.user)
    .subscribe ({
      next:(res)=>{
        this.utilisateur=res
        console.log(this.utilisateur)
        if (this.utilisateur.token){
          localStorage.setItem('token',this.utilisateur.token)
          let token=localStorage.getItem('token')
          if (token){
            let data =JSON.parse(window.atob(token.split('.')[1]))
            if (data.role=='etudiant'){
              this.router.navigate(['/etudiant'])
            }
            else{
              this.router.navigate(['/admin'])
            }
          }
        }
        else{
          alert (this.utilisateur.message)
        }

      },
    
    error: (error) => {
      console.error( error);
    }
    })
  }
  

}
