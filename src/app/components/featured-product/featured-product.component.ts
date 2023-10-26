import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/interfaces/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit{
  
  allProduct: Product[]=[];
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
