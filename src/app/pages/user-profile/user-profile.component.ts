import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvService } from 'src/app/services/cv.service';
import { User } from './../../utilities/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user!: User;
  constructor(private _users: CvService, private _router: ActivatedRoute) {}
  ngOnInit(): void {
    const id = +this._router.snapshot.params['id'];
    this.user = this._users.getUserById(id) as User;
  }
}
