import { CategoriesComponent } from '../../components/categories/categories.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient:HttpClient) { }


  getProduct() : Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  getProductById(id:string) : Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }

  // getCategories() : Observable<any>{
  //   return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  // }
}
