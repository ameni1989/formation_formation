import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscripService {

  constructor(private http:HttpClient) { }


  url="http://127.0.0.1:3000/inscription"
  ajouter(inscri:any){
    return this.http.post(this.url+'/ajout',inscri)

  }
  getall(){
    return this.http.get(this.url+'/all')

  }

  getallaccept(){
    return this.http.get(this.url+'/allaccept')

  }
  getattente(){
    return this.http.get(this.url+'/inscri_attente')

  }
  update(id:any,objet:any){
    return this.http.put(this.url+'/update/'+id, objet)

  }

}
