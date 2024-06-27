import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit{
constructor (private http:HttpClient){}

  username='username';
messages:any=[];
message=""
ngOnInit(){
  Pusher.logToConsole = true;

    const pusher = new Pusher('86108e885e248bc4fd82', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data: any) => {
      this.messages.push(data);
    });

    
}
envoi(){
  
  this.http.post('http://localhost:8000/api/message',{
   username:this.username,
   message:this.message
  }).subscribe ({
    next:(res)=>{
      this.message='';

       
    }
  })
}
}
