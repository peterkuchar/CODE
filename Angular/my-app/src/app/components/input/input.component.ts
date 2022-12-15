import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Task } from './../../models/Task'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputComponent implements OnInit {

  @Output() taskAdded = new EventEmitter<string>();

  tasks:Task[] = [];
  @Input() inputTask: string = "";
  @Input() inputDate!: Date;
  @Input() inputTime!: Date;

  constructor() {}
  ngOnInit(): void {}

  addNewTask() {
    this.tasks.push({
      content: this.inputTask,
      date: this.inputDate,
      time: this.inputTime,
      completed: false
    });

    this.taskAdded.emit(this.inputTask);

    this.inputTask = ""; //reset input text

  }
  onDateTimeChanged(date: Date, time: Date) {
    // Update inputDate and inputTime with the selected date and time
    this.inputDate = date;
    this.inputTime = time;
  }
}
