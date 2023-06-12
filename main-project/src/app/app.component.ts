import { Component } from '@angular/core';

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

  buttonClickedEvent(change: any) {
    this.countEventReceived += 1;
    this.lastMessage = change.detail;
  }
}
