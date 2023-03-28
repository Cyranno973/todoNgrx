import {Todo} from "../interfaces/todo.interface";
import {Action, ActionReducerMap, createReducer} from "@ngrx/store";

export interface AppState {
  todos: {
    data: Todo[]
  }
}

export const TODOS_INITIAL_STATE = {
  data: [
    {
      message: 'manger une pizza',
      done: false,
    },
  ]
}
export const todosReducer = createReducer(TODOS_INITIAL_STATE)
export const ROOT_REDUCERS: ActionReducerMap<AppState, Action> = {
  todos: todosReducer
}
