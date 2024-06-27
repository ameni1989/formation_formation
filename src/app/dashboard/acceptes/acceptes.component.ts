import { Component } from '@angular/core';
import { InscripService } from 'src/app/inscrip.service';

@Component({
  selector: 'app-acceptes',
  templateUrl: './acceptes.component.html',
  styleUrls: ['./acceptes.component.css']
})
export class AcceptesComponent {

 


  constructor (private _inscri:InscripService){}
  acceptes: any[] = []; // Initialisation à un tableau vide
  ngOnInit(){

    this._inscri.getallaccept()
    .subscribe ({
      next:(res:any)=>{
        this.acceptes=res.inscription
        console.log(this.acceptes);
        
      }
    })
  }}
