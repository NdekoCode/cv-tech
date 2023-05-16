import { Component } from '@angular/core';
import { User } from './../../utilities/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userSelected!: User;
  selectUser<T>(user: T) {
    this.userSelected = user as User;
  }
}
