import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/shared/services/brands.service';
import { Brand } from 'src/core/interfaces/brand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
    allBrands: Brand[] = []  ;


  constructor(private _brandsService:BrandService){}


  ngOnInit(): void {
    this.getBrands();
  }

  getBrands()
     {
      this._brandsService.getBrands().subscribe({
        next:(res:any)=>
        {
          this.allBrands= res.data;          
        }
      })
     }

}
