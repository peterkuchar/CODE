import { DatePipe } from '@angular/common';
import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { createAction } from '@ngrx/store';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BodyComponent implements OnInit {

  @Output() taskAdded = new EventEmitter<string>();

  tasks:Task[] = [];
  inputDate!: Date;
  inputTime!: Date;
  inputTask: string = "";

  constructor() {

    // Initialize inputDate and inputTime to the current date and time
    this.inputDate = new Date();
    this.inputTime = new Date();

    // have some Task
    this.tasks = [
        {
          content: 'First',
          date: Date.now(),
          time: Date.now(),
          completed: true
        },
        {
          content: 'second',
          date: Date.now(),
          time: Date.now(),
          completed: false
        },
        {
          content: 'third',
          date: Date.now(),
          time: Date.now(),
          completed: false
        },
        {
          content: 'fourth',
          date: Date.now(),
          time: Date.now(),
          completed: false
        }
    ];
  }

  ngOnInit(): void {}

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

    console.log(this.tasks)

    this.inputTask = "";  // reset input text
  }

  onTaskAdded(task: string) {
    this.inputTask = task;
    this.addNewTask();
  }
}
