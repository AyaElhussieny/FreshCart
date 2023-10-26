import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
   let _router =inject(Router);
  if(localStorage.getItem("userToken")){
    //login => home
  return true;
}else{
  //logout => login
  _router.navigate(['/Login']);
  return false;
}
}