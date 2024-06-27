import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/etudiant.service';

@Component({
  selector: 'app-envoyermsg',
  templateUrl: './envoyermsg.component.html',
  styleUrls: ['./envoyermsg.component.css']
})
export class EnvoyermsgComponent {

  constructor( private _etudiant:EtudiantService, private router:Router){}
  utilisateur_id:any
  message:any ={}
ngOnInit(){

  let token=localStorage.getItem ('token')
  if (token){
    let data=JSON.parse (window.atob (token.split('.')[1]))
    this.utilisateur_id=data._id
  }
}

  ajouter(){
    this.message.expediteur_id= this.utilisateur_id
    this._etudiant.ajouter_message(this.message)
    .subscribe ({
      next:(res)=>{
        alert("message envoyé")
        // console.log(res)
        this.router.navigate (['/home1'])
      },
      error:(err)=>{
        console.log(err)

      }
    })


  }


}
