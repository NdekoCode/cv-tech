import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from './../../services/agent.service';
import { User } from './../../utilities/models/user.model';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.scss'],
})
export class CvDetailsComponent {
  @Input() userData!: User;
  constructor(private _agent: AgentService, private _router: Router) {}
  addAgent(agent: User) {
    this._agent.addAgent(agent);
    this._router.navigate(['/agents']);
  }
}
