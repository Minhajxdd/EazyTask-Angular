import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

import { type TaskAddData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name?: string;
  isAddingTask: boolean = false;

  constructor(private tasksService: TaskService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTask(this.userId);
  }

  onComplete(id: string) {
    
  }
  
  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
