import { Component } from '@angular/core';
import {SignUpUser} from "./SignUpUser";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class SignUpComponent {

  user = new SignUpUser("","","","","","",0,"","","","","")

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
              lat: this.user.lat,
              long:this.user.long,
            }
          },
          phone:this.user.phone,
        }
      )
    })
      .then(res=>res.json())
      .then(json=>console.log(json))
  }

}
