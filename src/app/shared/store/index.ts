import {Action, ActionReducerMap} from "@ngrx/store";
import {todoFeatureKey, todosReducer, TodosState} from "./todos.reducer";
import {routerReducer} from "@ngrx/router-store";

export interface AppState {
  todos: TodosState;
  router: ReadyState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState, Action> = {
  [todoFeatureKey]: todosReducer,
  router: routerReducer,

}
