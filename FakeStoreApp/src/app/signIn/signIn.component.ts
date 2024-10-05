import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {SignInUser} from "./SignInUser";
import {NavComponent} from "../nav/nav.component";

import {signedIn} from "../../constants/signedIn";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css'],
    imports: [
        FormsModule,
        NavComponent
    ],
  standalone: true
})
export class SignInComponent {

  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router  ) {}

  user = new SignInUser("", "");

  onSubmit(){

    console.log(this.user.username);
    console.log(this.user.password);

    fetch('https://fakestoreapi.com/auth/login',{
      method:'POST',
      body:JSON.stringify({
        username: this.user.username,
        password: this.user.password
      })
    })
      .then(res=>res.json())
      .then(json=>console.log(json))

    signedIn.value = 'true';

    this.snackBar.open("You have successfully signed in.", 'Close', {duration: 3000})
    this.router.navigate(['/'])

  }
}
