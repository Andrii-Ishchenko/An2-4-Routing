import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(
	public messagesService: MessagesService, 
	private router: Router
) { }

  onActivate($event){
	console.log('Activated Component :', $event);
  }

  onDeactivate($event){
	console.log('Deactivated Component :', $event);
  }

  displayMessages() : void {
	this.router.navigate([{ outlets: { popup: ['messages'] } }]);
	this.messagesService.isDisplayed = true;
  }
}
