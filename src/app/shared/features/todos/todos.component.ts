import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "../../interfaces/todo.interface";
import {selectTodo, selectTodosData} from "../../store/todos.selectors";
import {Store} from "@ngrx/store";
import {fetchTodosAction, tryAddTodoAction, tryDeleteTodoAction, tryUpdateTodoAction} from "../../store/todos.actions";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos$: Observable<Todo[]> = this.store.select(selectTodosData)
  public message!: string;
  public selectedTodo$: Observable<Todo | null | undefined> =
    this.store.select(selectTodo);

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
