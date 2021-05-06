import { createAction, props } from '@ngrx/store';

export const setearFiltro = createAction(
  '[Filtro] Setear filtro',
  props<{ filtrarPor: string }>()
);
