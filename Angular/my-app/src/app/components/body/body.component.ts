import { Component, Input, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BodyComponent implements OnInit {

  tasks:Task[] = [];
  @Output() public inputDate: any;
  @Output() public inputTime: any;
  @Output() public inputTask: string = "";

  constructor() {
    this.tasks = [
      {
        content: 'First',
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

  ngOnInit(): void {

  }

  toggleDone(id: number) {
    this.tasks.map((v, i) => {
      if (i == id) v.completed = !v.completed;  // mark completed task with line-through style
      return v;
    })
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((v, i) => i !== id); // delete task
  }

  addNewTask() {
    this.tasks.push({
      content: this.inputTask,
      date: this.inputDate,
      time: this.inputTime,
      completed: false
    });

    console.log(this.tasks);

    this.inputTask = "";  // reset input text
    this.inputDate = ""; // reset input date
    this.inputTime = ""; // reset input time
  }
}
