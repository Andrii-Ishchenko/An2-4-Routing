import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	constructor(
		private router: Router,
		private route: ActivatedRoute) { }
	ngOnInit() {
	}
}