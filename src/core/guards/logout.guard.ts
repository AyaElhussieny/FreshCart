import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logoutGuard: CanActivateFn = (route, state) => {
  let _router =inject(Router);
  if(localStorage.getItem("userToken")){
    //login
    _router.navigate(['/Home']);

  return false;
}else{
  //logout
  return true;
}}
