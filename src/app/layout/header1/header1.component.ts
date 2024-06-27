import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component {
  constructor ( private router:Router){}


admin:any
  ngOnInit(){

    let token=localStorage.getItem('token')
    if (token){
      let data=JSON.parse (window.atob(token.split('.')[1]))
      this.admin=data
      console.log(this.admin)
    }
  }

  
  logout(){
  

        localStorage.removeItem('token');
        this.router.navigate(['/home1']);
     
  
       }
  
  
 }

