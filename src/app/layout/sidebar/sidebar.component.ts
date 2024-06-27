import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor (public _admin:AdminService){
  
  }
  messageCount:any
  ngOnInit(){
    this._admin.notification()
    .subscribe ({
      next:(res:any)=>{
        this._admin.notifications=res.messagenonlus
        console.log(this._admin.notifications)

        setInterval(() => {
          const test = localStorage.getItem('test');

          if (test === 'true') {
            location.reload();
             localStorage.setItem('test','false')
          }
        }, 1000); 
      }

      })
  

  
}
}