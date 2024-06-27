import { Component } from '@angular/core';

@Component({
  selector: 'app-header3',
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.css']
})
export class Header3Component {
  info:any
  dash:any
  etud:any
  ngOnInit(){
    let token= localStorage.getItem('token')
    if (token){
      let data= JSON.parse(window.atob(token.split('.')[1]))
     this.info=data;
     console.log(this.info)

     if (this.info.role=="administrateur"){
      this.dash=true
     }
     else{
      this.etud=true
     }
    }
  }

}
