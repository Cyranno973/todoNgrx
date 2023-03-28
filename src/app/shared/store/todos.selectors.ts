import {createFeatureSelector, createSelector} from "@ngrx/store";
import {todoFeatureKey, TodosState} from "./todos.reducer";

export const selectTodosFeature = createFeatureSelector<TodosState>(todoFeatureKey);
export const selectTododData = createSelector(selectTodosFeature, (state: TodosState) => {
  return state.data
} )
