// task.action.ts
import { State, Action, StateContext, Selector} from '@ngxs/store';
import { AddTask, RemoveTask, CheckedTask, DelCheckedTask } from '../actions/task.action';
import { Task } from '../../core/models/Task';


export class TaskStateModel {
  tasks: Task[];
  checkedTasks: Task[];
}

@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    tasks: [],
    checkedTasks: []
  }
})




export class TaskState {
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

  @Action(CheckedTask)
  checked({getState, patchState}: StateContext<TaskStateModel>, {payload}: CheckedTask) {
    const state = getState();
    patchState({
      checkedTasks: [...state.checkedTasks, payload]
    });
  }

  @Action(DelCheckedTask)
  delChecked({getState, patchState}: StateContext<TaskStateModel>, {payload}: DelCheckedTask) {
    patchState({
      checkedTasks: getState().checkedTasks.filter(a => a.name !== payload)
    });
  }

}
