import { Task } from '../models/Task';

export class AddTask {
  static readonly type = '[Task] Add';
  constructor(public payload: Task) {}
}

export class RemoveTask {
  static readonly type = '[Task] Remove';
  constructor(public payload: string) {}
}

export class CheckedTask {
  static readonly type = '[Task] Checked';
  constructor(public payload: Task) {}
}

export class DelCheckedTask {
  static readonly type = '[Task] delChecked';
  constructor(public payload: string) {}
}
