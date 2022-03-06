import { Component } from "@angular/core";
import { filter, Observable } from "rxjs";
import { combineLatestInit } from "rxjs/internal/observable/combineLatest";
import { TodosService } from "../../services/todos.service";
import { FilterEnum } from "../todos/types/filter.enum";
import { TodoInterface } from "../todos/types/todo.interface";


@Component({
    selector: 'app-todos-main',
    templateUrl: './main.component.html'
})
export class MainComponent{
   visibleTodos$:Observable<TodoInterface[]>;
   constructor (private todosService: TodosService){
       this.visibleTodos$ = combineLatest(
           this.todosService.todos$,
           this.todosService.filter$,
       ).pipe(map(([todos, filter]: [TodoInterface[],FilterEnum])=>{
           console.log('combine', todos, filter);
           return[];
       }
       ));
   }
}