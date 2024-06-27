import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }

  url="http://127.0.0.1:3000/formation/";

  url1="http://127.0.0.1:3000/contact/";
  getformations_prog(){
    return this.http.get(this.url+'listeprogames')
  }
  ajouter_message(message:any){
    return this.http.post(this.url1+'ajout',message)
  }
}
