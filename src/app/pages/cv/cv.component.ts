import { Component } from '@angular/core';
import { User } from './../../utilities/models/user.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  userSelected!: User;
  selectUser<T>(user: T) {
    this.userSelected = user as User;
    console.log(user);
  }
}
