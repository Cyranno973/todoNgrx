import {BrowserModule} from '@angular/platform-browser';
import {isDevMode, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/modules/material.module';
import {StoreModule} from '@ngrx/store';
import {ROOT_REDUCERS} from "./shared/store";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from "@angular/common/http";
import {TodoEffects} from "./shared/store/todos.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot(TodoEffects),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
