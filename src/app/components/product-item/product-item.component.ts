import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';
import { Product } from 'src/core/interfaces/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent  {


  @Input() product : Product = {} as Product;
  newData : string [] = [];
  wishListData : string [] = [];

  isFavProduct :boolean = false

constructor(private _cartService:CartService ,
  private _toastr: ToastrService,
  private _wishListService:WishListService
  ){ 
    this.getWishListData()
  }
  

  getWishListData(){
    this._wishListService.getWishList().subscribe({
      next :(res) =>{


          this.newData  = res.data.map((data:any) => data.id);
         this.wishListData = this.newData;
         for(let i=0 ; i<this.wishListData.length ; i++){
          if(this.product.id.includes(this.wishListData[i])){
  
            //  added to wish list
           this.isFavProduct = true ;
       }
         }

      }
  });
  

}

addToCart(productId:string){
  this._cartService.addProductToCart(productId).subscribe({
    next:(res:any)=>{
      // add to cart ==> nav bar icon
      this._cartService.numOfCartItems.next(res.numOfCartItems);
      //_toastr ==> NOTIFICATION ADD TO CART
      this._toastr.success(res.message);


      
    }
  })
}


addToWishList(productId : string){
  this._wishListService.addToWishList(productId).subscribe({
    next:(res)=>{ 
      //send update number of icon => navBar
      this._wishListService.numOfWishListItems.next(res.data.length);
      this._toastr.success(res.message);
      this.wishListData = res.data;
    
      
}
})
}

deleteFavProduct(productId : string ){
  this._wishListService.removeProduct(productId).subscribe({
    next :(res)=>{
      this._wishListService.numOfWishListItems.next(res.data.length);
      this._toastr.success(res.message);
      this.wishListData = res.data;
    }
  });
}


checkFavIcon(productId : string){

   if(this.wishListData.includes(productId)){
  
   //  deleted in wish list
   console.log("false ===>>>> delete");
   this.isFavProduct = false ;
  this.deleteFavProduct(productId);
  }
  else{
   // added to wish list
   console.log("true ===>>> added");
  this.isFavProduct = true;
   this.addToWishList(productId);
   }
                
             


  }

  
}


