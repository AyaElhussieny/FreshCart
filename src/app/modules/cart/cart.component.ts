import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Cart } from '../interface/cart';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartDetails: Cart = {} as Cart;

  constructor( private _cartService:CartService ,
    private _toastr: ToastrService){}


  ngOnInit(): void {
      this.getCart();
  }

   getCart(){
    this._cartService.getCart().subscribe({
      next :(res) =>{
        this.cartDetails = res;
        console.log(this.cartDetails);
        
      },
      error:(err)=>{
        console.log(err);
        
      }

    })
   }

   updateCount(count : number , id :string){
    this._cartService.updateProductCount(count,id).subscribe({
      next:(res)=>{
        // console.log(res);
        this.cartDetails = res;

        
      }
    })
   }

   deleteItem(id:string){
    this._cartService.removeProduct(id).subscribe({
      next:(res)=>{
        // console.log(res);
        this.cartDetails = res;
        this._cartService.numOfCartItems.next(res.numOfCartItems);
        this._toastr.success("Product remove successfully in your cart ");   
      }
    })
   }
  }

