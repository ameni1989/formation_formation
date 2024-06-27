import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-msgrepondre',
  templateUrl: './msgrepondre.component.html',
  styleUrls: ['./msgrepondre.component.css']
})
export class MsgrepondreComponent {
  constructor(private _admin:AdminService, private router:Router, private act:ActivatedRoute){}



  id:any
  recu:any
  object:any={}
  
  expediteur_id:any
  utilisateur_id:any
  ngOnInit(){

    this.id=this.act.snapshot.paramMap.get('id')
    
    this._admin.voirmessage(this.id)
  
    .subscribe ({
      next:(res:any)=>{
        this.recu=res.message
        console.log(this.recu);
        this.utilisateur_id=this.recu.expediteur_id
        console.log(this.utilisateur_id);
        


      }
    })


 
   let token=localStorage.getItem('token')
  if (token){
    let data=JSON.parse(window.atob(token.split('.')[1]));
    this.expediteur_id=data._id
    console.log(this.expediteur_id);
  }


  }
  repondre(){
   
  this.object.destinataire_id=this.utilisateur_id
  this.object.expediteur_id=this.expediteur_id
  console.log(this.object)
    this._admin.envoimessage(this.object)
    
    .subscribe ({
      next:(res)=>{
        alert ('le message a été bien envoyé')
        console.log(res);

        this.router.navigate(['/admin/msgrecu'])
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  
  }

}
