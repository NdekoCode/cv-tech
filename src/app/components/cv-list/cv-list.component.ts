import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CvService } from './../../services/cv.service';
import { User } from './../../utilities/models/user.model';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss'],
})
export class CvListComponent implements OnInit {
  @Output() onUserSelect = new EventEmitter();
  constructor(private _userList: CvService) {}
  selected: boolean = false;
  userList!: User[];
  userSelected!: User;
  ngOnInit() {
    this.userList = this._userList.getUserList();
  }

  getSelectedUser<T>(user: T) {
    this.userSelected = user as User;
    this.onUserSelect.emit(user);
  }
}
