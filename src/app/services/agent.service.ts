import { Injectable } from '@angular/core';
import { User } from './../utilities/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  users: User[] = [];
  constructor() {}
  getAgents(): User[] {
    return this.users;
  }
  isAgent(user: User): boolean {
    return !!this.users.find((u) => u.id === user.id);
  }
  addAgent(user: User): void {
    if (!this.isAgent(user)) {
      this.users.push(user);
    }
  }
  removeAgent(user: User): void {
    console.log(user);
    if (this.isAgent(user)) {
      this.users = this.users.filter((u) => u.id !== user.id);
    }
  }
}
