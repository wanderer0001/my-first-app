import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-first-app';
  name!: string;
  items = [
    {
    name: "Task 1",
    status: "pending"
    },
    {
    name: "Task 2",
    status: "in progress"
    },
    {
    name: "Task 3",
    status: "completed"
    },
    {
    name: "Task 4",
    status: "pending"
    },
    {
    name: "Task 5",
    status: "in progress"
    },
    {
    name: "Task 6",
    status: "pending"
    }
    ];
}
