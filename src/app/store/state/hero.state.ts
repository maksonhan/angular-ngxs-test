// hero.action.ts

import {State, Action, StateContext} from '@ngxs/store';
import { AddHero } from '../actions/hero.actions';
import { Heroes } from '../../core/models/Heroes';


export class HeroStateModel {
  restHeroes: Heroes[];
  toMission: Heroes[];
}


@State<HeroStateModel>({
  name: 'heroes',
  defaults: {
    restHeroes: [],
    toMission: []
  }
})



export class HeroesState {
  @Action(AddHero)
  add({getState, patchState}: StateContext<HeroStateModel>, {payload}: AddHero) {
    const state = getState();
    patchState({
      restHeroes: [...state.restHeroes, payload]
    });
  }
}
