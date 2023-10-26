import { WishList } from './../interface/wish-list';
import { Component, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

wishListDetails : WishList = {} as WishList;
      wishListUpdate : string [] = [];

  constructor( private _wishListService:WishListService ,
    private _cartService:CartService , 
     private _toastr: ToastrService){}
  
ngOnInit(): void {
    this.getWishList();
}



getWishList(){
  this._wishListService.getWishList().subscribe({
    next :(res) =>{
      this.wishListDetails = res;
      console.log(this.wishListDetails);
      // console.log(res)
      
    }
  });
 }

 deleteFavProduct(productId : string ){
  this._wishListService.removeProduct(productId).subscribe({
    next :(res:any)=>{
      this._wishListService.numOfWishListItems.next(res.data.length);
      this.wishListUpdate = res.data;      
      this._toastr.success(res.message);
      // console.log(res);
      
      this.getWishList();
    }
    ,
    error:(Error)=>{
      console.log(Error);
      
    }
  });
 };

 






  addToCart(productId:string){
    this._cartService.addProductToCart(productId).subscribe({
      next:(res:any)=>{
        // console.log(res);
  
        // add to cart ==> nav bar icon
        this._cartService.numOfCartItems.next(res.numOfCartItems);
  
        //_toastr ==> NOTIFICATION ADD TO CART
        this._toastr.success(res.message);
        
      }
    });
  };
}
