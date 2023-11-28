import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent   } from 'home/home.component';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
//import { PipeComponent } from './pipe/pipe.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TodosComponent } from './MyTodoList/todos/todos.component';
import { TodoItemComponent } from './MyTodoList/todo-item/todo-item.component';
import { AddTodoComponent } from './MyTodoList/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    //PipeComponent,
    FormsComponent,
    ReactiveformComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
