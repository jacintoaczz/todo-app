import { createReducer, on } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import {
  actualizarEstado,
  actualizarTodos,
  agregar,
  editar,
  eliminar,
} from './todo.actions';

const todo1 = new Todo('Practicar Angular');
const todo2 = new Todo('Practicar NgRx');
export const estadoInicial: Todo[] = [todo1, todo2];

const _todoReducer = createReducer(
  estadoInicial,
  on(agregar, (state, { texto }) => {
    const nuevoTodo = new Todo(texto);

    return [...state, nuevoTodo];
  }),
  on(actualizarEstado, (state, { completado, id }) => {
    return state.map((todoEdit) => {
      if (todoEdit.id === id) {
        return {
          ...todoEdit,
          completado: completado,
        };
      } else {
        return todoEdit;
      }
    });
  }),
  on(actualizarTodos, (state, { estado }) => {
    return state.map((todo) => {
      if (todo.completado !== estado) {
        return {
          ...todo,
          completado: estado,
        };
      } else {
        return { ...todo };
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((editarTodo) => {
      if (editarTodo.id === id) {
        return {
          ...editarTodo,
          texto: texto,
        };
      } else {
        return editarTodo;
      }
    });
  }),
  on(eliminar, (state, { todoId }) => {
    return state.filter((todoEdit) => todoEdit.id !== todoId);
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
