import {Component, OnInit} from '@angular/core';

import { products } from '../products';
import {categories} from '../categories';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit{
  products = products;
  categories = categories;

  constructor( private route: ActivatedRoute) { }
  category;
  // tslint:disable-next-line:typedef
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    this.category = categories.find(category => category.id === categoryIdFromRoute);
  }

  // tslint:disable-next-line:typedef
  share(link) {
    window.open(link);
  }

  // tslint:disable-next-line:typedef
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }



}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
