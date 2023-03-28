import {createFeatureSelector, createSelector} from "@ngrx/store";
import {todoFeatureKey, todosReducer, TodosState} from "./todos.reducer";
import {selectRouteParams} from "./router.selectors";
import {Todo} from "../interfaces/todo.interface";
import {Params} from "@angular/router";

export const selectTodosFeature = createFeatureSelector<TodosState>(todoFeatureKey);
export const selectTodosData = createSelector(selectTodosFeature, (state: TodosState) => {
  return state.data
} )

export const selectTodo = createSelector(selectTodosData, selectRouteParams, (todos: Todo[], params: Params) => {
    const todoId = params['todoId'];
    if (todoId && todos.length) {
      return todos.find((t) => t._id === todoId);
    } else {
      return null;
    }
  }
);
