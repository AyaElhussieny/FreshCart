import { CartItem } from './../../../core/interfaces/cart-item';
import { OrdersService } from './../../shared/services/orders.service';
import { Component } from '@angular/core';
import { Order } from 'src/core/interfaces/order';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent  {
 userId : string ='';
  emptyOrder:boolean = false;
  cartItems : CartItem[] =[]
  allOrders: Order[] = []  ;


  constructor(private _ordersService:OrdersService){

   this.userId= `${localStorage.getItem("userId")}`;

   
  
    this._ordersService.getUserOrders(this.userId).subscribe({
      next:(res:any)=>
      {

        this.allOrders = res;
    
        if(this.allOrders.length>0){

          this.emptyOrder =false;
        }else{
          this.emptyOrder =true;

        }
      }

    });
   }

}


  

 


