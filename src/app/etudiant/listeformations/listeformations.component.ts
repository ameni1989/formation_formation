import { Component } from '@angular/core';
import { HomeService } from 'src/app/home.service';
import { HomeComponent } from 'src/app/home/home.component';
import { InscripService } from 'src/app/inscrip.service';

@Component({
  selector: 'app-listeformations',
  templateUrl: './listeformations.component.html',
  styleUrls: ['./listeformations.component.css']
})
export class ListeformationsComponent {
  constructor (private _home:HomeService, private _inscri:InscripService){}
formations:any
form:any
utilisateur_id:any
 ngOnInit(){
  this._home.getall()
  .subscribe ({
    next:(res)=> {
      this.form=res
      this.formations=this.form.formation
      console.log(this.formations)
    }
  })


  let token=localStorage.getItem('token')
  if (token){
    let data =JSON.parse(window.atob(token.split('.')[1]))
    this.utilisateur_id=data._id
  
  }
  console.log('id',this.utilisateur_id)
 }

inscrip:any={}
ins=false
 inscrire(item: any){
 item.ins=true
 
  this.inscrip.formation_id=item._id
  this.inscrip.utilisateur_id=this.utilisateur_id

  this._inscri.ajouter(this.inscrip)
  .subscribe ({
    next:(res)=>{
      console.log(res)
      alert ('inscri')
      localStorage.setItem(`ins_${item._id}`, 'true');

    

    },
    error:(err)=>{
    console.log(err)
    }
  })
 
  
}

}
