import { Component } from '@angular/core';
import {NavComponent} from "../nav/nav.component";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    imports: [
        NavComponent
    ],
    standalone: true
})
export class AboutComponent {

}
