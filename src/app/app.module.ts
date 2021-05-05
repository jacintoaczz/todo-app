import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { TodoComponent } from './features/todos/todo/todo.component';
import { TodoListComponent } from './features/todos/todo-list/todo-list.component';
import { TodoItemComponent } from './features/todos/todo-item/todo-item.component';
import { TodoFooterComponent } from './features/todos/todo-footer/todo-footer.component';
import { TodoAddComponent } from './features/todos/todo-add/todo-add.component';

const components = [
  AppComponent,
  FooterComponent,
  TodoComponent,
  TodoListComponent,
  TodoItemComponent,
  TodoFooterComponent,
  TodoAddComponent,
];
const modules = [BrowserModule, AppRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [
    ...modules,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
