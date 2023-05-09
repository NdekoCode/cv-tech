import { Component, Input } from '@angular/core';
import { AgentService } from './../../services/agent.service';
import { User } from './../../utilities/models/user.model';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.scss'],
})
export class CvDetailsComponent {
  @Input() userData!: User;
  constructor(private _agent: AgentService) {}
  addAgent(agent: User) {
    this._agent.addAgent(agent);
  }
}
