import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.scss'],
})
export class AddCvComponent {
  onSubmit(arg: NgForm) {
    console.log(arg);
  }
}
