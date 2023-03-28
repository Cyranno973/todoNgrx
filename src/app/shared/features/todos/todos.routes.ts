import {TodosComponent} from "./todos.component";
import {Routes} from "@angular/router";


export const TODOS_ROUTES: Routes = [
  {path: '', component: TodosComponent},
  {path: ':todoId', component: TodosComponent}
]
