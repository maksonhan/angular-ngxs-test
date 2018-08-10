import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppComponent } from './app.component';

import { HeroesState, TaskState } from './store/state/index';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { CreateComponent } from './components/forTodo/create/create.component';
import { CheckedComponent } from './components/forTodo/checked/checked.component';
import { HeroespersonsComponent } from './components/marvel/heroespersons/heroespersons.component';
import { DataheroesComponent } from './components/marvel/dataheroes/dataheroes.component';
import { CreateHeroComponent } from './components/marvel/createhero/createhero.component';


const routes = [
  {path: '', component: TodoComponent},
  {path: 'heroes', component: HeroesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    CheckedComponent,
    HeroesComponent,
    TodoComponent,
    HeroespersonsComponent,
    DataheroesComponent,
    CreateHeroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([
      TaskState,
      HeroesState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
