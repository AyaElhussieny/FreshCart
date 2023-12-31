import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token : string | null ='';
  numOfCartItems :BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private _httpClient:HttpClient) {

    // cartUser

     this.token = localStorage.getItem("userToken");

     this.getCart().subscribe({
      next:(res)=>{
        this.numOfCartItems.next(res.numOfCartItems);
        // console.log(res.numOfCartItems);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
     });
    
    }


    addProductToCart( id : string) :Observable<any>{
      return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/cart',{
        productId : id
      },
      {
        headers:{
          token : `${localStorage.getItem("userToken")}`
        }
      });
 
   }


   getCart() : Observable<any>{
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/cart',
    {
      headers:{
        token : `${localStorage.getItem("userToken")}`
      }
    });

 }

 updateProductCount(count:number, id :string) : Observable<any>{
  return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
    count:`${count}`
  },
  {
    headers:{
      token : `${localStorage.getItem("userToken")}`
    }
  });

}

removeProduct( id :string) : Observable<any>{
  return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
  {
    headers:{
      token : `${localStorage.getItem("userToken")}`
    }
  });

}

generateOnlinePayment(cartId:string , shippingAddress :any) : Observable<any>{
  return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{
    shippingAddress :shippingAddress
  },
  {
    headers:{
      token : `${localStorage.getItem("userToken")}`
    }
  });

}


  }