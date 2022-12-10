import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  button: string = 'Add';

  taskList: any[] = []
  newTaskForm = this.formBuilder.group({
    taskItem: '',
    taskDate: '',
    taskTime: ''
  })

  constructor(
  private formBuilder: FormBuilder
  ) {}

  addTask() {
    const value = this.newTaskForm.value.taskItem
    this.taskList.push({ id: this.taskList.length, name: value })
    this.newTaskForm.reset();
  }


  // task: string = document.getElementById('inputText');

}
