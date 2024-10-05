import { Component, OnInit} from '@angular/core';

import { Product} from "../shared/Product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true
})
export class ProductComponent {

  public product!: Product;

  constructor(private route: ActivatedRoute,
              private router: Router  ) {
  }


  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    fetch('https://fakestoreapi.com/products/' + id)
      .then(res=>res.json())
      .then(json=> {
        this.product = json;
      })
  }


  public getProductImage() {
    return this.product.image;
  }
  public getProductPrice() {
    return this.product.price;
  }
  public getProductTitle() {
    return this.product.title;
  }
  public getProductID() {
    return this.product.id;
  }

  public getProductDescription() {
    return this.product.description;
  }

}
