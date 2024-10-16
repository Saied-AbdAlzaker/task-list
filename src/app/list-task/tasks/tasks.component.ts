import { Component, OnInit } from '@angular/core';
import { UserTaskService } from '../Services/user-task.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  constructor(private _users: UserTaskService) { }

  ngOnInit(): void {
    this.getAllMyTasks();
  }
  // Array
  todo = this._users.todo;
  done = this._users.done;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  // json (https://dummyjson.com/users) 
  todo1: any = [];
  done1: any = [];

  getAllMyTasks() {
    this._users.getUsers().subscribe({
      next: (res) => {
        for (let task of res.users) {
          if (task.status == 'todo1') {
            this.todo1.push(task)
          } else  {
            this.done1.push(task)
          }
        }
      }
    })
  }

  // // mat-selection-list
  typesOfShoes=this._users.typesOfShoes;


}
