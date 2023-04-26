import { Component, Input } from '@angular/core';
import { User } from './../../utilities/models/user.model';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.scss'],
})
export class CvDetailsComponent {
  @Input() userData!: User;
}
