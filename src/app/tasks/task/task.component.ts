import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

	@Input() task : Task;
	@Output() onComplete = new EventEmitter<Task>();

	constructor() { }

	completeTask(): void {
		this.onComplete.emit(this.task);
	}

	editTask() {

	}

}
