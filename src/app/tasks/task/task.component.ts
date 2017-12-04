import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

	@Input() task : Task;
	@Output() onComplete = new EventEmitter<Task>();

	constructor(private router : Router) { }

	completeTask(): void {
		this.onComplete.emit(this.task);
	}

	editTask() {
		const link  = ['/edit', this.task.id];
		this.router.navigate(link);
	}

}
