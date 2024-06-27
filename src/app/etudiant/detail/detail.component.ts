import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/home.service';
import { InscripService } from 'src/app/inscrip.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  constructor (private _home:HomeService, private act:ActivatedRoute , private _inscri:InscripService){}
detail:any
id:any

utilisateur_id:any
etudiant=false
  ngOnInit(){

    this.id=this.act.snapshot.paramMap.get('id')
    this._home.getbyid(this.id)
    .subscribe ({
      next:(res)=> {
        this.detail=res
        this.detail=this.detail.formation
        console.log(this.detail)
      }
})






let token=localStorage.getItem('token')
if (token){
  let data =JSON.parse(window.atob(token.split('.')[1]))
  this.utilisateur_id=data._id
  if (data.role=="etudiant"){
    this.etudiant=true

  }
}}
  
 
  inscrip:any={}
ins=false
attente=false
 inscrire(item:any){
//  item.ins=true
 
   this.inscrip.formation_id=item._id
  this.inscrip.utilisateur_id=this.utilisateur_id
  console.log(this.inscrip.formation_id);
  console.log( this.inscrip.utilisateur_id);
  //  this.inscrip.attente=true
  // console.log(this.inscrip.attente);
  
  this._inscri.ajouter(this.inscrip)
  .subscribe ({
    next:(res)=>{
      console.log(res)
      alert ("votre demande d'inscription est en cours de traitement ")
      // this.attente=true;
      // localStorage.setItem(`ins_${item._id}`, 'true');
      
    

    },
    error:(err)=>{
    console.log(err)
    }
  })
 
  
}

}

