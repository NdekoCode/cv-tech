import { Component, OnInit } from '@angular/core';
import { AgentService } from './../../services/agent.service';
import { User } from './../../utilities/models/user.model';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss'],
})
export class AgentComponent implements OnInit {
  agents!: User[];
  constructor(private _agent: AgentService) {}
  ngOnInit(): void {
    this.agents = this._agent.getAgents();
  }
  removeAgent(agent: User) {
    this._agent.removeAgent(agent);
    this.agents = this._agent.getAgents();
  }
}
