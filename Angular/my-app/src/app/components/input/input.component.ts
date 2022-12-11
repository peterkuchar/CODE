import { Component, OnInit } from '@angular/core';
import { Task } from './../../models/Task'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  tasks:Task[] = [];
  inputTask: string = "";
  DateSelected: any;
  TimeSelected: any;

  constructor() {}


  ngOnInit(): void {}

  addTask() {
    this.tasks.push({
      content: this.inputTask,
      date: this.DateSelected,
      time: this.TimeSelected,
      completed: false
    });

    console.log(this.tasks);

    this.inputTask = "";
    this.DateSelected = "";
    this.TimeSelected = "";
  }
}
