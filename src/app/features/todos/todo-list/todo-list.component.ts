import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList!: Todo[];
  filtroActual$: Observable<string>;

  constructor(private _store: Store<AppState>) {
    _store.select('todos').subscribe((todos) => (this.todoList = todos));
    this.filtroActual$ = _store.select('filtro');
  }

  ngOnInit(): void {}
}
