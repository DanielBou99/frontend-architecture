import { Component, OnInit } from '@angular/core';
import { AnimalsService } from 'src/app/services/animals/animals.service';
import { Dog } from 'src/app/shared/models/dog';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  dogs: Dog[] = [];

  constructor(private animalsService: AnimalsService) {
  }

  ngOnInit(): void {
    this.animalsService.getAllDogs().subscribe(data => {
      this.dogs = data;
    });
  }

}
