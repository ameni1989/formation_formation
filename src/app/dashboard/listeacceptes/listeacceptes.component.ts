import { Component } from '@angular/core';
import { InscripService } from 'src/app/inscrip.service';

@Component({
  selector: 'app-listeacceptes',
  templateUrl: './listeacceptes.component.html',
  styleUrls: ['./listeacceptes.component.css']
})
export class ListeacceptesComponent {

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
  }
}
