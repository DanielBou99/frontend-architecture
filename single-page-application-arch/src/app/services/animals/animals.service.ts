import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from 'src/app/shared/models/dog';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  URL_API = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(`${this.URL_API}/dogs`);
  }

}
