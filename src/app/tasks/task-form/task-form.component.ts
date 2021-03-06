import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Task } from './../../models/task';
import { TaskArrayService } from './../services/task-array.service';

@Component({
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit, OnDestroy {
  task: Task;

  constructor(
		private taskArrayService: TaskArrayService,
		private route: ActivatedRoute,
		private router: Router
	) { }

  ngOnInit() {
		this.task = new Task(null, '', null, null);

		// it is not necessary to save subscription to route.paramMap
		// it handles automatically
		this.route.paramMap
		.switchMap((params: Params) => this.taskArrayService.getTask(+params.get('id')))
		.subscribe(
			task => this.task = Object.assign({}, task),
			err => console.log(err)
		);
  }

  ngOnDestroy() {

  }

  	saveTask() {
		const task = new Task(
					this.task.id,
					this.task.action,
					this.task.priority,
					this.task.estHours
				);

		if (task.id) {
			this.taskArrayService.updateTask(task);
		}
		else {
			this.taskArrayService.addTask(task);
		}

		this.goBack();
	}

	goBack(): void {
		this.router.navigate(['/home']);
	}
}
