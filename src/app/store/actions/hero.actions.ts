import { Heroes } from '../../core/models/Heroes';

export class AddHero {
  static readonly type = '[Heroes] add';
  constructor(public payload: Heroes) {}
}
