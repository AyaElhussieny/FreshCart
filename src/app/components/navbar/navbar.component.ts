import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn : boolean = false;
  numOfCartItems :number =0;
  numOfWishListItems :number =0;


  constructor(private _authService:AuthService ,
     private _cartService:CartService,
     private _wishListService:WishListService){

    this._authService.userData.subscribe((data)=>
    {
      if(this._authService.userData.getValue()){
        this.isLoggedIn =true;
      }else{
        this.isLoggedIn = false;
      }
      
    });

   this._wishListService.numOfWishListItems.subscribe(res=>{
    this.numOfWishListItems = res;
    console.log(res);
   })

    this._cartService.numOfCartItems.subscribe(res => {
      this.numOfCartItems = res;
    });

    
  }

  logOut(){
    this._authService.logOut();
  }

}
