import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Task } from './../../models/Task'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  @Output() tasksChange = new EventEmitter();

  @Input() task!: [];

  tasks:Task[] = [];
  inputTask: string = "";
  inputDate: any;
  inputTime: any;

  constructor() {}
  ngOnInit(): void {}

  addTask() {
    this.tasks.push({
      content: this.inputTask,
      date: this.inputDate,
      time: this.inputTime,
      completed: false
    });

    console.log(this.tasks);

    this.tasksChange.emit(this.task);

    this.inputTask = "";
    this.inputDate = "";
    this.inputTime = "";
  }
}
