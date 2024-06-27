import { Component } from '@angular/core';
import { InscripService } from 'src/app/inscrip.service';

@Component({
  selector: 'app-listeinscrip',
  templateUrl: './listeinscrip.component.html',
  styleUrls: ['./listeinscrip.component.css']
})
export class ListeinscripComponent {


  constructor (private _inscrip:InscripService){

  }
  inscris:any
  page:any
  ngOnInit(){
    this._inscrip.getattente()
    .subscribe ({
      next:(res:any)=>{
        this.inscris=res.inscription
        console.log(this.inscris);
        
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }
inscrip:any={}
    inscrire(item: any){
      this.inscrip.inscri=true

     
       this._inscrip.update(item._id,this.inscrip)
       .subscribe ({
         next:(res)=>{
           console.log(res)
           alert ('Demande acceptée')
           this.ngOnInit();
     
         
     
         },
         error:(err)=>{
         console.log(err)
         }
       })
      
       
     }
     
  
}
