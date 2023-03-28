import {createAction, props} from "@ngrx/store";
import {Todo} from "../interfaces/todo.interface";

export const addTodoAction = createAction('[todos] add todo', props<{todo: Todo}>())
export const deleteTodoAction = createAction('[todos] delete todo', props<{index: number}>())
export const toggleTodoAction = createAction('[todos] toggle todo', props<{index: number}>())
