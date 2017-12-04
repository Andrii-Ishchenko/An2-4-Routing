import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { AppRoutingModule, appRouterComponents } from './app.routing.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { MessagesService } from './services';
import { MessagesComponent } from './components';


@NgModule({
  declarations: [
    AppComponent,
	appRouterComponents,
	MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	HttpModule,
	TasksModule,
	UsersModule,
	AppRoutingModule
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { 

	constructor(router: Router) {
		console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
	}
}
