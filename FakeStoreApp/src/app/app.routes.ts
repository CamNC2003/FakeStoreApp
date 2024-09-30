import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InventoryComponent} from "./inventory/inventory.component";
import {AboutComponent} from "./about/about.component";
import {FeedbackComponent} from "./feedback/feedback.component";
import {SignInComponent} from "./signIn/signIn.component";
import {SignUpComponent} from "./signUp/signUp.component";
import {AccountComponent} from "./account/account.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'feedback', component: FeedbackComponent },
  {path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'account', component: AccountComponent },

];
