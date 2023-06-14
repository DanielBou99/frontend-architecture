import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  microFrontend1: string = 'http://localhost:4444/micro-frontend-1.js';
  descriptionButton: string = "Click Here!";
  countEventReceived: number = 0;
  lastMessage: string = '';

  constructor(private cookieService: CookieService) {

  }

  buttonClickedEvent(change: any) {
    this.countEventReceived += 1;
    this.lastMessage = change.detail;
  }

  setCookie() {
    this.cookieService.set('animal', this.lastMessage);
  }
}
