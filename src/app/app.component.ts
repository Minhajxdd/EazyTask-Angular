import { Component } from '@angular/core';

import { HederComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HederComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId!: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
}
