import { Component } from '@angular/core';
import {SignUpUser} from "./SignUpUser";
import {FormsModule} from "@angular/forms";
import {NavComponent} from "../nav/nav.component";
import {signedIn} from "../../constants/signedIn";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css'],
    imports: [
        FormsModule,
        NavComponent
    ],
  standalone: true
})
export class SignUpComponent {

  user = new SignUpUser("","","","","","",0,"","","")

  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router  ) {}

  onSubmit(){

    fetch('https://fakestoreapi.com/users',{
      method:"POST",
      body:JSON.stringify(
        {
          email: this.user.email,
          username:this.user.username,
          password:this.user.password,
          name:{
            firstname: this.user.firstname,
            lastname:this.user.lastname,
          },
          address:{
            city: this.user.city,
            street: this.user.street,
            number:this.user.number,
            zipcode: this.user.zipcode,
            geolocation:{
              lat: "0.00",
              long: "0.00",
            }
          },
          phone:this.user.phone,
        }
      )
    })
      .then(res=>res.json())
      .then(json=>console.log(json))

    signedIn.value = 'true';

    this.snackBar.open('You have successfully signed up', 'Close', {duration: 3000})

    this.router.navigate(['/'])
  }

}
