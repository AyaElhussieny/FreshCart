import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  token : string | null ='';

  numOfWishListItems :BehaviorSubject<number> = new BehaviorSubject(0);


  baseUrl : string =`https://ecommerce.routemisr.com/api/v1/`;

  constructor(private _httpClient:HttpClient) {

    this.token = localStorage.getItem("userToken");


    this.getWishList().subscribe({
      next:(res)=>{

        //update number of heart icon
      this.numOfWishListItems.next(res.count);

        // console.log(res.count);
        

      }
    })
   }

// add product to whish list
  addToWishList(ProductId:string) : Observable<any>{
    
    return this._httpClient.post(this.baseUrl+`wishlist`,
    {
      productId: ProductId
    });
  }

getWishList(): Observable<any>{
    
  return this._httpClient.get(this.baseUrl+`wishlist`);
}



removeProduct(productId: string): Observable<any>{
    
  return this._httpClient.delete(this.baseUrl+`wishlist/${productId}`,{
    headers:{
      token : `${localStorage.getItem("userToken")}`
    }
  });
}

}