import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LocalstorageService } from './localstorage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private localstore:LocalstorageService,private router:Router) { }

  getUsers(){
    return this.http.get(environment.base_Url + "/user");
  }
  createUsers(data: any){
    this.http.post(environment.base_Url + "/auth/signup",{data:data}).subscribe(data=>{
      this.localstore.set("User token",data["token" as keyof object])
      console.log('user:',data);

      
    })
  }

  signInUser(data:any){
    this.http.post(environment.base_Url + "/auth/signin",{data:data}).subscribe(data=>{
      console.log(data["status" as keyof object]);
      if(data["status" as keyof object] === true){
        this.router.navigate(["/dashboard"]);
      }
    })
  }

}
