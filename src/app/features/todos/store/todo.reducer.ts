import { createReducer, on } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { agregar } from './todo.actions';

const todo1 = new Todo('Practicar Angular');
const todo2 = new Todo('Practicar NgRx');
export const estadoInicial: Todo[] = [todo1, todo2];

const _todoReducer = createReducer(
  estadoInicial,
  on(agregar, (state, { texto }) => {
    const nuevoTodo = new Todo(texto);

    return [...state, nuevoTodo];
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
