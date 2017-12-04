import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent,MessagesComponent, PageNotFoundComponent} from './components'

const routes : Routes = [
	{
		path: 'about',
		component : AboutComponent
	},
	{
		path: 'messages',
		component: MessagesComponent,
		outlet: 'popup'
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
]

export let appRouterComponents = [AboutComponent, PageNotFoundComponent];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
}) 
export class AppRoutingModule {}