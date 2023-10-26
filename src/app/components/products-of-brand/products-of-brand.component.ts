import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/core/interfaces/product';

@Component({
  selector: 'app-products-of-brand',
  templateUrl: './products-of-brand.component.html',
  styleUrls: ['./products-of-brand.component.css']
})
export class ProductsOfBrandComponent implements OnInit {

  brandId:string ='';
  // categoriesIdOfAll : string []=[];
  allProduct: Product[]=[];
  allProductOfBrandId: Product[]=[];
  emptyProduct:boolean = false;


  constructor(private _activatedRoute:ActivatedRoute , private _productsService:ProductsService){
    this._activatedRoute.paramMap.subscribe(
      (res:any)=>
      {
        console.log(res.params.brandId);
        this.brandId = res.params.brandId;
        
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
      
      if(this.allProduct[i].brand._id.includes(this.brandId)){
    
    this.allProductOfBrandId.push(this.allProduct[i])
      }
    }

      if(this.allProductOfBrandId.length>0)
    {
      this.emptyProduct=false;
      console.log(this.allProductOfBrandId);

    }else{
      this.emptyProduct=true;

    }
  }
})
}
}
