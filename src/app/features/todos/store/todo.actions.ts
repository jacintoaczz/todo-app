import { createAction, props } from '@ngrx/store';
import { Todo } from '../model/todo.model';

export const agregar = createAction(
  '[TODO] Agregar to-do',
  props<{ texto: string }>()
);
export const actualizarEstado = createAction(
  '[TODO] Actualizar estado',
  props<{ completado: boolean; id: string }>()
);
export const actualizarTodos = createAction(
  '[TODO] Actualizar todos',
  props<{ estado: boolean }>()
);
export const editar = createAction(
  '[TODO] Editar to-do',
  props<{ id: string; texto: string }>()
);
export const eliminar = createAction(
  '[TODO] Eliminar to-do',
  props<{ todoId: string }>()
);
