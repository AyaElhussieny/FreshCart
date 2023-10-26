import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/core/interfaces/product';

@Component({
  selector: 'app-products-of-category',
  templateUrl: './products-of-category.component.html',
  styleUrls: ['./products-of-category.component.css']
})
export class ProductsOfCategoryComponent implements OnInit {
  categoryId:string ='';
  categoriesIdOfAll : string []=[];
  allProduct: Product[]=[];
  allProductOfCategoryId: Product[]=[];
  emptyProduct:boolean = false;


  constructor(private _activatedRoute:ActivatedRoute , private _productsService:ProductsService){
    this._activatedRoute.paramMap.subscribe(
      (res:any)=>
      {
        console.log(res.params.catId);
        this.categoryId = res.params.catId;
        
      });
  }

  ngOnInit(): void {
    this.getAllProducts();
}
getAllProducts(){

this._productsService.getProduct().subscribe({
  next:(res)=>{
    console.log(res);
    this.allProduct = res.data;     

    for (let i = 0; i < this.allProduct.length; i++) {
      
      if(this.allProduct[i].category._id.includes(this.categoryId)){
    
    this.allProductOfCategoryId.push(this.allProduct[i])
      }}

      if(this.allProductOfCategoryId.length>0)
    {
      this.emptyProduct=false;
      console.log(this.allProductOfCategoryId);

    }else{
      this.emptyProduct=true;

    }
  }
})
}
}
