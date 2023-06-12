import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dogs: any = []
  URL_API = "http://localhost:3000/dogs";

  @Input('descriptionButton') descriptionButton = 'Get dogs';
  @Output() buttonClickedEvent = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  getDogs() {
    this.http.get<any>(this.URL_API).subscribe(data => {
      this.dogs = data;
    });
  }

  buttonClicked(event: string) {
    this.buttonClickedEvent.emit(event);
  }

}
