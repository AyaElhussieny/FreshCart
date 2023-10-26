import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  baseUrl :string =`https://ecommerce.routemisr.com/api/v1/auth/`;

  constructor(private _httpClient:HttpClient) { }

  forgetPassword(userEmail:any) : Observable<any>{
    return this._httpClient.post(this.baseUrl+`forgotPasswords`,userEmail);
  }

  resetCode(resetCode:any) : Observable<any>{
    return this._httpClient.post(this.baseUrl+`verifyResetCode`,resetCode);
  }

  resetPassword(rePasswordForm :any) : Observable<any>{
    return this._httpClient.put(this.baseUrl+`resetPassword`,rePasswordForm);
  }



}
