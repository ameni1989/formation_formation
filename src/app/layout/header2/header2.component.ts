import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentifService } from 'src/app/authentif.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component {

  constructor (private _admin:AuthentifService, private router:Router){}
info:any
  ngOnInit(){
    let token= localStorage.getItem('token')
    if (token){
      let data= JSON.parse(window.atob(token.split('.')[1]))
     this.info=data;
     console.log(this.info)
    }
  }

    logout(){

      localStorage.removeItem('token')
      this.router.navigate (['/login'])
    }
  }



