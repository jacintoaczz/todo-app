import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { actualizarTodos } from '../store/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  completado = false;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {}

  public togglearTodo() {
    this.completado = !this.completado;
    const estado = this.completado;

    this._store.dispatch(actualizarTodos({ estado }));
  }
}
