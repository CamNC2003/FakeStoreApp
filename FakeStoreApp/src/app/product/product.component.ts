import { Component, OnInit} from '@angular/core';

import { Product} from "../shared/Product";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NavComponent} from "../nav/nav.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {signedIn} from "../../constants/signedIn";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
    imports: [
        NavComponent,
        NgIf,
        RouterLink
    ],
  standalone: true
})
export class ProductComponent {

  public product!: Product;

  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
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

  public putOnHold(id: number) {

    fetch('https://fakestoreapi.com/carts',{
      method:"POST",
      body:JSON.stringify(
        {
          userId: 0,
          date: new Date().toISOString(),
          products:[{productId:id,quantity:1}]
        }
      )
    })
      .then(res=>res.json())
      .then(json=>console.log(json))



    this.snackBar.open('The product has been placed on hold', 'Close', {
      duration: 500
    }).afterDismissed().subscribe(()=>{
      this.router.navigate(['/inventory']);
    });

  }

    protected readonly signedIn = signedIn;
}
