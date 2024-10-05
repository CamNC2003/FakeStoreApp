import { Component } from '@angular/core';

import { Product} from "../shared/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {NavComponent} from "../nav/nav.component";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  imports: [
    NavComponent,
    NgForOf
  ],
  standalone: true
})
export class InventoryComponent {

  public products: Array<Product> = new Array<Product>();

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  ngOnInit() {
    fetch('https://fakestoreapi.com/products')
      .then(function(response) { return response.json(); })
      .then((json) => {
        this.products = json;
      });

  }

  public getProductImage(id: number) {
    return this.products[id].image;
  }
  public getProductPrice(id: number) {
    return this.products[id].price;
  }
  public getProductTitle(id: number) {
    return this.products[id].title;
  }
  public getProductID(id: number) {
    return this.products[id].id;
  }

  public viewProduct(id: number) {
    this.router.navigate(['/product', {id: this.getProductID(id)}]);
  }



}
