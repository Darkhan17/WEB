import { products } from '../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit {
  constructor( private route: ActivatedRoute,
               private cartService: CartService) { }
  products = products;

  product;
  addToCart(product): void {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  like(product): void{
    product.like = product.like + 1;
  }

  remove(id): void{
  this.products = this.products.filter((x) => x.id !== id);
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  }

}
