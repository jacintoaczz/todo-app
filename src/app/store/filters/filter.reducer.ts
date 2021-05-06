import { createReducer, on } from '@ngrx/store';
import { setearFiltro } from './filter.actions';

const estadoInicial: string = 'TODAS';

const _filtroReducer = createReducer(
  estadoInicial,
  on(setearFiltro, (state, { filtrarPor }) => {
    return filtrarPor;
  })
);

export function filtroReducer(state: any, action: any) {
  return _filtroReducer(state, action);
}
