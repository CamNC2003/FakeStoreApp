import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SignInComponent } from './signIn/signIn.component';
import {AccountComponent} from "./account/account.component";
import {SignUpComponent} from "./signUp/signUp.component";
import {NavComponent} from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HomeComponent, AboutComponent, InventoryComponent, AccountComponent, FeedbackComponent,
    SignInComponent, SignUpComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Furniture Store';
}
