import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { Todo } from '../model/todo.model';
import { actualizarEstado, editar, eliminar } from '../store/todo.actions';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('txtInputLocal') txtInputLocal!: ElementRef;

  checkField!: FormControl;
  txtInput!: FormControl;
  editando = false;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    const id = this.todo.id;
    this.checkField.valueChanges.subscribe((completado: boolean) => {
      this._store.dispatch(actualizarEstado({ completado, id }));
    });
  }

  public editarTodo() {
    this.editando = true;

    setTimeout(() => {
      this.txtInputLocal.nativeElement.select();
    }, 1);
  }

  public edicionTerminada() {
    this.editando = false;

    if (this.txtInput.invalid) {
      return;
    }

    const texto = this.txtInput.value;
    const id = this.todo.id;
    this._store.dispatch(editar({ id, texto }));
  }

  public eliminar() {
    const todoId = this.todo.id;
    this._store.dispatch(eliminar({ todoId }));
  }
}
