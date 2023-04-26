import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './../../utilities/models/user.model';

@Component({
  selector: 'app-user-cv-item',
  templateUrl: './user-cv-item.component.html',
  styleUrls: ['./user-cv-item.component.scss'],
})
export class UserCvItemComponent {
  @Input() userData!: User;
  @Output() sendUser = new EventEmitter<User>();
  getUser(user: User) {
    this.sendUser.emit(user);
  }
}
