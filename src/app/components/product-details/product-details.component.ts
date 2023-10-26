import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/core/interfaces/product';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishListService } from 'src/app/shared/services/wish-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{
   
  isFavProduct :boolean = false;
  newData : string [] = [];
  wishListData : string [] = [];



  productId:string='';
  productDetails : Product = {} as Product;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }


    

  constructor(private _activatedRoute:ActivatedRoute 
    ,private _productsService:ProductsService ,
     private _cartService:CartService,
     private _toastr: ToastrService,
     private _wishListService:WishListService
     ){
    this._activatedRoute.paramMap.subscribe(
      (res:any)=>
      {
        this.productId = res.params.id;
        
      });

      this._productsService.getProductById(this.productId).subscribe({
        //success

        next:(res:any)=>{

          this.productDetails = res.data;
  
        }
      });

    this.getWishListData();
      
  }


  getWishListData(){
    this._wishListService.getWishList().subscribe({
      next :(res) =>{


          this.newData  = res.data.map((data:any) => data.id);
         this.wishListData = this.newData;
         for(let i=0 ; i<this.wishListData.length ; i++){
          if(this.productDetails.id.includes(this.wishListData[i])){
  
            //  added to wish list
           this.isFavProduct = true ;
       }
         }

      }
  });
  

}

  addToCart(id:string){
    this._cartService.addProductToCart(id).subscribe({
      next:(res:any)=>{
        this._cartService.numOfCartItems.next(res.numOfCartItems);
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






