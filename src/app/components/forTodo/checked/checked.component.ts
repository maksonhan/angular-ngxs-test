import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Task } from 'src/app/core/models/Task';
import { Observable } from 'rxjs';
import { CheckedTask, DelCheckedTask, RemoveTask } from '../../../store/actions/task.action';


@Component({
  selector: 'app-checked',
  templateUrl: './checked.component.html',
  styleUrls: ['./checked.component.sass']
})
export class CheckedComponent implements OnInit {

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
