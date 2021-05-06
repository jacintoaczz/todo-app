import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducers';
import { setearFiltro } from 'src/app/store/filters/filter.actions';
import { eliminarCompletados } from '../store/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: string[] = ['TODAS', 'COMPLETADAS', 'PENDIENTES'];
  filtroActual$: Observable<string>;
  pendientes$!: Observable<number>;

  constructor(private _store: Store<AppState>) {
    this.filtroActual$ = _store.select('filtro');
    this.pendientes$ = _store
      .select('todos')
      .pipe(map((todos) => todos.filter((todo) => !todo.completado).length));
  }

  ngOnInit(): void {}

  public cambiarFiltro(filtrarPor: string) {
    this._store.dispatch(setearFiltro({ filtrarPor }));
  }

  public limpiarCompletados() {
    this._store.dispatch(eliminarCompletados());
  }
}
