import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InventoryComponent} from "./inventory/inventory.component";
import {AboutComponent} from "./about/about.component";
import {FeedbackComponent} from "./feedback/feedback.component";
import {SignInComponent} from "./signIn/signIn.component";
import {SignUpComponent} from "./signUp/signUp.component";
import {ProductComponent} from "./product/product.component";

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'inventory', title: 'Inventory', component: InventoryComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'feedback', title: 'Feedback', component: FeedbackComponent },
  { path: 'signIn', title: 'Sign In', component: SignInComponent },
  { path: 'signUp', title: 'Sign Up', component: SignUpComponent },
  { path: 'product', title: 'Product', component: ProductComponent },
];


