import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Category } from 'src/core/interfaces/category';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css']
})
export class MainCategoriesComponent implements OnInit{
  allCategories: Category[] = []  ;

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
          console.log(this.allCategories);
          
          
        }
      })
     }


}
