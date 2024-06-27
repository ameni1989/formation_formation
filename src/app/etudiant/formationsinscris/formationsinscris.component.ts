import { Component } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { InscripService } from 'src/app/inscrip.service';

@Component({
  selector: 'app-formationsinscris',
  templateUrl: './formationsinscris.component.html',
  styleUrls: ['./formationsinscris.component.css']
})
export class FormationsinscrisComponent {
  inscris: any[]=[];

  constructor (private _inscri:InscripService){}
  utilisateur_id:any
  liste_inscris:any
  liste:any
  tab:any=[]
  ngOnInit(){


    let token=localStorage.getItem('token')
  if (token){
    let data =JSON.parse(window.atob(token.split('.')[1]))
    this.utilisateur_id=data._id
    console.log("data",data);
    
  
  }
  console.log("id:",this.utilisateur_id);
  
    this._inscri.getallaccept()
    .subscribe({
      next:(res:any)=>{
        this.liste=res.inscription
        console.log(this.liste);
        
        for (let i of this.liste){
       
        if (i.utilisateur_id===this.utilisateur_id){
         
          
  
          this.inscris.push(i)
          console.log(this.inscris);
          
         
        }

        }
        console.log("sddd",this.inscris);
        
      

     console.log(res)
      }
    })
  }

}
