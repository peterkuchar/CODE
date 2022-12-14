import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Task } from './../../models/Task'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputComponent implements OnInit {

  @Output() tasksChange = new EventEmitter();

  tasks:Task[] = [];
  @Input() public inputTask: string = "";
  @Input() public inputDate: any;
  @Input() public inputTime: any;

  constructor() {}
  ngOnInit(): void {}

  addNewTask() {
    this.tasks.push({
      content: this.inputTask,
      date: this.inputDate,
      time: this.inputTime,
      completed: false
    });

    this.tasksChange.emit(this.tasks);

    this.inputTask = ""; //reset input text
    this.inputDate = ""; //reset input date
    this.inputTime = ""; // reset input time
  }
}
