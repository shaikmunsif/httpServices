import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUsers(){
   // console.log(this.http.get("https://jsonplaceholder.typicode.com/users"));
   return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  addCustomer(data:any){
   return this.http.post("https://jsonplaceholder.typicode.com/users",data);
  }
}
