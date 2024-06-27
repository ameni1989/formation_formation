import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent {


  constructor( private _admin:AdminService){}
  formateur={
    name:'',
    lastname:'',
    email:'',
    telephone:''
  }
  formateur1:any={}
  formateurs:any=[]
  ngOnInit(){
    this._admin.getall()
    .subscribe ({
      next:(res:any)=>{
        this.formateurs=res.Formateur
        console.log()
        // this.ngOnInit();
      }
    })
  }


  ajouter(){
    this._admin.ajouter(this.formateur)
    .subscribe ({
      next:(res)=>{
        console.log(res)
        alert("enregistré")
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


  afficher(item:any){
    this.formateur1=item
    console.log(this.formateur1)
  }
  id:any
  update(){
    this.id=this.formateur1._id
    console.log("id",this.id)
    console.log("form",this.formateur1)
    this._admin.update(this.id,this.formateur1)
    .subscribe ({
      next:(res)=>{
        alert("modifié")
        console.log(this.formateur1);
        
      },
      error:err=>{
        console.log(err)
      }
    })
  }

  delete(id:any){
   this._admin.delete(id)
   .subscribe  ({
    next:(res)=>{
      alert ("supprimé")
      this.ngOnInit();
    }, 
    error:err=>{
      console.log(err);
      
    }
   })
  }
}
