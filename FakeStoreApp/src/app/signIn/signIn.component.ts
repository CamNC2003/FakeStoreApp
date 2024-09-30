import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {SignInUser} from "./SignInUser";

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class SignInComponent {

  user = new SignInUser("", "")

  onSubmit(){

    console.log(this.user.username)
    console.log(this.user.password)

    fetch('https://fakestoreapi.com/auth/login',{
      method:'POST',
      body:JSON.stringify({
        username: this.user.username,
        password: this.user.password
      })
    })
      .then(res=>res.json())
      .then(json=>console.log(json))

  }
}
