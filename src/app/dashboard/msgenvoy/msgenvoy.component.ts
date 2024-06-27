import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-msgenvoy',
  templateUrl: './msgenvoy.component.html',
  styleUrls: ['./msgenvoy.component.css']
})
export class MsgenvoyComponent {

  constructor(private _admin:AdminService){}
  envoyees:any
ngOnInit(){
  


    this._admin.msgenvoy()
    .subscribe({
      next:(res:any)=>{
        this.envoyees=res.message
        console.log(this.envoyees);
        
      }
    })
  }


}
