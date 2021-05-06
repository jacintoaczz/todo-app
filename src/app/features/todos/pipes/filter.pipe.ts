import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.model';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: string | null): Todo[] {
    switch (filter) {
      case 'COMPLETADAS':
        return todos.filter((todo) => todo.completado);

      case 'PENDIENTES':
        return todos.filter((todo) => !todo.completado);

      default:
        return todos;
    }
  }
}
