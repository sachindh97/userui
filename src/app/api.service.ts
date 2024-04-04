import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

 saveUsers(data:any){
    let usrData = JSON.stringify(data);
    sessionStorage.setItem("users",usrData);
 }

 getUsers()
 {
    let getData:any = sessionStorage.getItem("users");
    return JSON.parse(getData);
 }





}
