import {Todo} from "../interfaces/todo.interface";
import {Action, ActionReducerMap} from "@ngrx/store";
import {todoFeatureKey, todosReducer, TodosState} from "./todos.reducer";

/**
 * l'ensemble du state de notre application
 */
export interface AppState {
  todos: TodosState
}

/**
 * configuration de tous nos reducer et des differente parti du state
 */
export const ROOT_REDUCERS: ActionReducerMap<AppState, Action> = {
  [todoFeatureKey]: todosReducer
}
