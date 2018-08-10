import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Task } from '../../models/Task';
import { Observable } from 'rxjs';
import { RemoveTask, CheckedTask, DelCheckedTask } from '../../actions/task.action';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  tasks: Observable<Task>;
  checkedTasks: Observable<Task>;
  constructor(private store: Store) {
    this.tasks = this.store.select(state => state.tasks.tasks);
    this.checkedTasks = this.store.select(state => state.tasks.checkedTasks);
  }
  delTask(name) {
    this.store.dispatch(new RemoveTask(name));
  }
  checkTask(name) {
    this.store.dispatch(new CheckedTask({name}));
    this.store.dispatch(new RemoveTask(name));
  }
  delCheckedTask(name) {
    this.store.dispatch(new DelCheckedTask(name));
  }

  ngOnInit() {
  }

}
