import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  tasks!:Task[];

  DateSelected: any;
  TimeSelected: any;
  inputTask: string = "";

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      {
        content: 'first',
        date: '24/12/2022',
        time: '08:00 AM',
        completed: false
      },
      {
        content: 'second',
        date: '24/12/2022',
        time: '08:00 AM',
        completed: false
      },
      {
        content: 'third',
        date: '24/12/2022',
        time: '08:00 AM',
        completed: false
      },
      {
        content: 'fourth',
        date: '24/12/2022',
        time: '08:00 AM',
        completed: false
      }
    ]
  }

  toggleDone(id: number) {
    this.tasks.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((v, i) => i !== id);
  }
}
