import { createAction, props } from '@ngrx/store';
import { Todo } from '../model/todo.model';

export const agregar = createAction(
  '[TODO] Agregar to-do',
  props<{ texto: string }>()
);
export const editar = createAction('[TODO] Editar to-do');
export const eliminar = createAction('[TODO] Eliminar to-do');
