import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'micro-frontend-1';

  dogs = [
    {
      id: 1,
      name: 'Bulldog'
    },
    {
      id: 2,
      name: 'Beagle'
    },
    {
      id: 3,
      name: 'Yorkshire Terrier'
    },
    {
      id: 4,
      name: 'Cavalier King Charles Spaniel'
    },
    {
      id: 5,
      name: 'English Springer Spaniel'
    }
  ]
}
