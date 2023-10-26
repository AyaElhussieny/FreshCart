import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  userData:BehaviorSubject <any> = new BehaviorSubject('');
  constructor(private _httpClient:HttpClient ,private _router:Router) {
    if(localStorage.getItem("userToken")){
      this.getUserData();
    }
   }

getUserData(){
    let encodeToken = JSON.stringify(localStorage.getItem("userToken"));
    // hash token ==> object user data 
    let encoded = jwtDecode(encodeToken);
    console.log(encoded);
    //any update user token
    this.userData.next(encoded);

    let UserId = this.userData.getValue().id;
    localStorage.setItem("userId",UserId);
    // console.log(this.userData.getValue().id);
    
    
}


register(data:any) : Observable<any> {
  return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,data);

}

login(data:any) : Observable<any> {
  return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,data);

}

logOut(){
  this.userData.next(null);
  localStorage.removeItem("userToken");
  localStorage.removeItem("userId");
  localStorage.removeItem("cartId");
  this._router.navigate(['/Login'])
}

}
