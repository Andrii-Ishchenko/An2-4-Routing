import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent, HomeComponent, PageNotFoundComponent} from './components'

const routes : Routes = [
	{
		path : 'home',
		component: HomeComponent
	},
	{
		path: 'about',
		component : AboutComponent
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

export let appRouterComponents = [AboutComponent, HomeComponent, PageNotFoundComponent];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
}) 
export class AppRoutingModule {}