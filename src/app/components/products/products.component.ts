import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/core/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProduct: Product[]=[]  ;
  searchKey : string="";


  constructor(private _productsService:ProductsService){}


  ngOnInit(): void {
      this.getAllProducts();
  }
getAllProducts(){

  this._productsService.getProduct().subscribe({
    next:(res)=>{
      this.allProduct = res.data;
      
    }
  })
}


}
