import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentifService {

  constructor(private http:HttpClient) { }
    url="http://127.0.0.1:3000/utilisateur/"

    register(user:any){
      return this.http.post(this.url+'register', user)

    }
    login(user:any){
      return this.http.post(this.url+'login', user)

    }
    

  
}
