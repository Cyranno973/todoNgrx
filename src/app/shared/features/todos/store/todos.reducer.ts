import {createReducer, on} from "@ngrx/store";

import * as TodosActions from './todos.actions'
import {Todo} from "../../../interfaces/todo.interface";

export interface TodosState {
  data: Todo[],
  error: any
}

export const todoFeatureKey ='todos';

export const TODOS_INITIAL_STATE: TodosState = {
  data: [],
  error: null
}
export const todosReducer = createReducer(
  TODOS_INITIAL_STATE,

  on(TodosActions.fetchTodosSuccessAction, (state:TodosState, {todos} :{todos: Todo[] }): TodosState => {
    return {
      ...state,
      data:[...todos],
    }
  }),
  on(TodosActions.errorTodoAction, (state:TodosState, {error} :{error: any }): TodosState => {
    return {
      ...state,
      error
    }
  }),

  on(TodosActions.addTodoAction, (state: TodosState, {todo}: { todo: Todo }): TodosState => {
    return {
      ...state,
      data: [...state.data, todo],
    }
  }),

  on(TodosActions.updateTodoAction, (state: TodosState, {todo}: { todo: Todo }): TodosState => {
    return {
      ...state,
      data: state.data.map(v =>  v._id !== todo._id ? v: todo)
    }
  }),
  on(TodosActions.deleteTodoAction, (state: TodosState, {todo}: { todo: Todo }): TodosState => {
    return {
      ...state,
      data: state.data.filter((v) => v._id !== todo._id)
    }
  }),
)
