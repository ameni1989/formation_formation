import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor (private _home:HomeService, private router:Router){}
formations:any
form:any
 ngOnInit(){
  this._home.getall()
  .subscribe ({
    next:(res)=> {
      this.form=res
      this.formations=this.form.formation
      console.log(this.formations)
    }
  })
 }

 detail(item:any){
  let token=localStorage.getItem('token')
  if (token){

    console.log(item._id)
   this.router.navigate(['/etudiant/detail/',item._id]);
  }
  else {
    this.router.navigate(['/login']);
  }

 }




 
}
