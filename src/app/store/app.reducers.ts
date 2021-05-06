import { ActionReducerMap } from '@ngrx/store';
import { Todo } from '../features/todos/model/todo.model';
import * as fromTodo from '../features/todos/store/todo.reducer';
import * as fromFilter from '../store/filters/filter.reducer';

export interface AppState {
  todos: Todo[];
  filtro: string;
}

// Creamos una constante para relacionar el estado con sus respectivos reducers y asi
// importar dichos valores en el StoreModule de manera mas facil.
export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFilter.filtroReducer,
};
