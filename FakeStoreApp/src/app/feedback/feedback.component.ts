import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavComponent} from "../nav/nav.component";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NavComponent
  ],
    standalone: true
})
export class FeedbackComponent {

  public feedback: string;

  constructor(private snackBar: MatSnackBar) {
    this.feedback = "";
  }


  onSubmit() {
    console.log(this.feedback);

    this.snackBar.open("Your feedback has been submitted.", 'Close', {
      duration: 1000
    }).afterDismissed().subscribe(()=>{
      window.location.reload();
    });

  }

}
