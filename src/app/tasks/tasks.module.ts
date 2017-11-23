import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskListComponent, TaskComponent, TaskArrayService } from '.';
import { TasksRoutingModule } from './tasks.routing.module';


@NgModule({
  imports: [
	CommonModule,
	FormsModule,
	TasksRoutingModule
  ],
  declarations:[
	  TaskComponent,
	  TaskListComponent
  ],
  providers:[
	  TaskArrayService
  ]
})
export class TasksModule { }
