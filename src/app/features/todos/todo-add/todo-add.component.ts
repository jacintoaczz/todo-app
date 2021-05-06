import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { agregar } from '../store/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  txtInput!: FormControl;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this.txtInput = new FormControl('', Validators.required);
  }

  public agregarTodo() {
    if (this.txtInput.invalid) {
      return;
    }

    const texto = this.txtInput.value;
    this._store.dispatch(agregar({ texto }));
  }
}
