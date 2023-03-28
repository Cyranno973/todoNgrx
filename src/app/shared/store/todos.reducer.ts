import {Todo} from "../interfaces/todo.interface";
import {createReducer, on} from "@ngrx/store";
import * as TodosActions from "./todos.action"
export interface TodosState {
  data: Todo[]
}
export const TODOS_INITIAL_STATE = {
  data: [
    {
      message: 'manger une pizza',
      done: false,
    },
  ]
}
export const todosReducer = createReducer(
  TODOS_INITIAL_STATE,
  on(
    TodosActions.addTodoAction,
    (state: TodosState, { todo }: { todo: Todo }): TodosState => {
      return {
        ...state,
        data: [...state.data, todo],
      };
    }
  ),
  on(
    TodosActions.deleteTodoAction,
    (state: TodosState, { index }: { index: number }): TodosState => {
      return {
        ...state,
        data: state.data.filter((v, i) => i !== index),
      };
    }
  ),
  on(
    TodosActions.toggleTodoAction,
    (state: TodosState, { index }: { index: number }): TodosState => {
      return {
        ...state,
        data: state.data.map((v, i) =>
          i !== index ? v : { ...v, done: !v.done }
        ),
      };
    }
  )
);
