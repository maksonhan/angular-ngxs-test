import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';


import { AddTask } from '../../actions/task.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  constructor(private store: Store) { }
  addTask(name) {
    if (name === '') {
      alert('Не играйся с TODO! Введи задачу')
      return false;
    }
    this.store.dispatch(new AddTask({name}));
  }

  ngOnInit() {
  }




}
