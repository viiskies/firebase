import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './todo-list/form/form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { TodoService } from './todo-list/shared/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FormComponent
  ],
  imports: [
  AngularFireDatabaseModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
