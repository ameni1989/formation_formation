import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http:HttpClient) { }
url="http://127.0.0.1:3000/formateur"
url1="http://127.0.0.1:3000/contact"
notifications:any
getall(){
   return this.http.get(this.url+'/all')
}
ajouter(formateur:any){
  return this.http.post(this.url+'/ajout',formateur)
}
update(id:any,formateur:any){
  return this.http.put(this.url+'/update/'+id,formateur)
}
delete(id:any){
  return this.http.delete(this.url+'/delete/'+id)
}

// contact

msgrecu(){
  return this.http.get(this.url1+'/all_etud')

}
msgenvoy(){
  return this.http.get(this.url1+'/all_admin')

}
voirmessage(id:any){
  return this.http.get(this.url1+'/getbyid/'+id)

}
envoimessage(message:any){
  return this.http.post(this.url1+'/ajout',message)

}
// notifications message
notification(){
return this.http.get(this.url1+'/msgnonlus')

}

  
}
