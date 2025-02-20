import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http:HttpClient) { }


  url="http://127.0.0.1:3000/";

  getall(){
    return this.http.get(this.url+'formation/all')
  }

  getbyid(id:any){
    return this.http.get(this.url+'formation/getbyid/'+id)
  }

}
