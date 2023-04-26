import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './../../utilities/models/user.model';

@Component({
  selector: 'app-user-cv-item',
  templateUrl: './user-cv-item.component.html',
  styleUrls: ['./user-cv-item.component.scss'],
})
export class UserCvItemComponent {
  @Input() userData!: User;
  @Input() isSelected: boolean = false;
  @Output() sendUser = new EventEmitter<User>();
  getUser() {
    // TODO Emettre un evenement et y injecter la personne
    this.sendUser.emit(this.userData);
  }
}
