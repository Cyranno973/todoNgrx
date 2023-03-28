import {Action, ActionReducerMap} from "@ngrx/store";
import {routerReducer} from "@ngrx/router-store";

export interface AppState {
  router: ReadyState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState, Action> = {
  router: routerReducer,

}
