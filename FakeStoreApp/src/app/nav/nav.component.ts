import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {signedIn} from "../../constants/signedIn";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  imports: [
    RouterLink,
    NgIf
  ],
  standalone: true
})
export class NavComponent {

  protected readonly signedIn = signedIn;
}
