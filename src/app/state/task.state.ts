// task.action.ts

import { State, Action, StateContext, Selector} from '@ngxs/store';
import { Task } from '../models/Task';
import { AddTask, RemoveTask } from '../actions/task.action';


export class TaskStateModel {
  tasks: Task[];
}

@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    tasks: []
  }
})

export class TaskState {
  @Selector()
  static getTasks(state: TaskStateModel) {
    return state.tasks;
  }
  @Action(AddTask)
  add({getState, patchState}: StateContext<TaskStateModel>, {payload}: AddTask) {
    const state = getState();
    patchState({
      tasks: [...state.tasks, payload]
    });
  }
  @Action(RemoveTask)
  remove({getState, patchState}: StateContext<TaskStateModel>, {payload}: RemoveTask) {
    patchState({
      tasks: getState().tasks.filter(a => a.name !== payload)
    });
  }

}
