import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Category } from 'src/core/interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  allCategories: Category[] = []  ;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      550 :{
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: true
  }

  constructor(private _categoriesService:CategoriesService){}


  ngOnInit(): void {
    this.getCategories();
  }

    getCategories()
     {
      this._categoriesService.getCategories().subscribe({
        next:(res:any)=>
        {

          this.allCategories= res.data;
          
        }
      })
     }
  

  
}