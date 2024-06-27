import { Component } from '@angular/core';
import { EtudiantComponent } from '../etudiant.component';
import { EtudiantService } from 'src/app/etudiant.service';

@Component({
  selector: 'app-listeprogrames',
  templateUrl: './listeprogrames.component.html',
  styleUrls: ['./listeprogrames.component.css']
})
export class ListeprogramesComponent {
constructor (private etudiant:EtudiantService){

}
formations:any
ngOnInit(){
  this.etudiant.getformations_prog()
  .subscribe ({
    next:(res:any)=>{
      this.formations=res.formation
    },
    error:(err)=>{
      console.log(err)

    }
  })
}


}
