import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from './shared/interfaces/todo.interface';
import {Store} from "@ngrx/store";
import {selectTodosData} from "./shared/store/todos.selectors";
import {addTodoAction, deleteTodoAction, toggleTodoAction} from "./shared/store/todos.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos$: Observable<Todo[]> = this.store.select(selectTodosData);
  public message!: string;


  constructor(private store: Store) {
  }

  public addTodo() {
    this.store.dispatch(
      addTodoAction({todo: {message: this.message, done: false}})
    );
  }

  public toggleTodo(index: number) {
    this.store.dispatch(toggleTodoAction({index}));
  }

  public deleteTodo(index: number) {
    this.store.dispatch(deleteTodoAction({index}));
  }
}
