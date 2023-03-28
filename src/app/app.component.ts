import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from './shared/interfaces/todo.interface';
import {Store} from "@ngrx/store";
import {selectTododData} from "./shared/store/todos.selectors";
import {fetchTodosAction, tryAddTodoAction, tryDeleteTodoAction, tryUpdateTodoAction} from "./shared/store/todos.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public todos$: Observable<Todo[]> = this.store.select(selectTododData)
  public message!: string;

  constructor(private store: Store,) {
  }

  ngOnInit() {
    this.store.dispatch(fetchTodosAction());
  }

  public addTodo() {
    this.store.dispatch(tryAddTodoAction({todo: {message: this.message, done: false}}))
  }

  public updateTodo(todo: Todo) {
    const newTodo = {...todo, done: !todo.done}
    this.store.dispatch(tryUpdateTodoAction({todo: newTodo}))
  }

  public deleteTodo(todo: Todo) {
    this.store.dispatch(tryDeleteTodoAction({todo}))
  }
}
