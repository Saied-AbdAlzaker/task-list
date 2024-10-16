import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

  constructor(private _HttpClient: HttpClient) { }
// Array
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  // tasks: string[] = ['HTML', 'CSS', 'Javascript', 'Angular', 'Angular Material'];

  // https://dummyjson.com/users
  getUsers(): Observable<any> {
    return this._HttpClient.get(`https://dummyjson.com/users`)
  }

  // mat-selection-list
  typesOfShoes: string[] = ['HTML', 'CSS', 'Javascript', 'Angular', 'Angular Material'];


}
