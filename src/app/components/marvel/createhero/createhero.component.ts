import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddHero } from '../../../store/actions/hero.actions';

@Component({
  selector: 'app-createhero',
  templateUrl: './createhero.component.html',
  styleUrls: ['./createhero.component.sass']
})
export class CreateHeroComponent implements OnInit {

  constructor(private store: Store) {
  }

  addHero(name, skills, race) {
    this.store.dispatch(new AddHero({ name, skills, race }));
  }

  ngOnInit() {
  }

}
