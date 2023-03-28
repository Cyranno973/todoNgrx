import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodosComponent} from "./todos.component";
import {RouterModule} from "@angular/router";
import {TODOS_ROUTES} from "./todos.routes";
import {MaterialModule} from "../../modules/material.module";
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {todoFeatureKey, todosReducer} from "./store/todos.reducer";
import {EffectsModule} from "@ngrx/effects";
import {TodoEffects} from "./store/todos.effects";



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(TODOS_ROUTES),
    StoreModule.forFeature(todoFeatureKey, todosReducer),
    EffectsModule.forFeature([TodoEffects]),
  ]
})
export class TodosModule { }
