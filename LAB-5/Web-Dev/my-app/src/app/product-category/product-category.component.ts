import { Component } from '@angular/core';

import { categories } from '../categories';



@Component({
  selector : 'app-product-category' ,
  templateUrl : './product-category.component.html',
  styleUrls : ['./product-category.component.css']
})


export class ProductCategoryComponent{
  categories = categories;
  category;

  setCategory(category): void{
    this.category = category;
  }
}




