import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TasksModule } from './tasks/tasks.module';
import { Router } from '@angular/router';
import { AppRoutingModule, appRouterComponents } from './app.routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
	appRouterComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
	HttpModule,
	AppRoutingModule,
	TasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

	constructor(router: Router) {
		console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
	}
}
