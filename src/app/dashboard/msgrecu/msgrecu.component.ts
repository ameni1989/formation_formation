import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-msgrecu',
  templateUrl: './msgrecu.component.html',
  styleUrls: ['./msgrecu.component.css']
})
export class MsgrecuComponent {
constructor (private _admin:AdminService) {}
msgs:any
ngOnInit(){
  this._admin.msgrecu()
  .subscribe ({
    next:(res:any)=>{
      this.msgs=res.message
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}


test(){
      localStorage.setItem('test', 'true');

}
}
