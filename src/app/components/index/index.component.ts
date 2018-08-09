import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Task } from '../../models/Task';
import { Observable } from 'rxjs';
import { RemoveTask } from '../../actions/task.action';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  tasks: Observable<Task>;
  constructor(private store: Store) {
    this.tasks = this.store.select(state => state.tasks.tasks);
  }
  delTask(name) {
    this.store.dispatch(new RemoveTask(name));
  }

  ngOnInit() {
  }

}
