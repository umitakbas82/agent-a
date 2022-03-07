import { Component } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { TodoInterface } from '../todos/types/todo.interface';
import { TodosService } from '../../services/todos.service';
import { map } from 'rxjs/operators';
import { FilterEnum } from '../todos/types/filter.enum';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
@Component({
    selector: 'app-todos-main',
    templateUrl: './main.component.html'
})
export class MainComponent {
    visibleTodos$: Observable<TodoInterface[]>;
    noTodoClass$: Observable<boolean>

    constructor(private todosService: TodosService) {
        this.noTodoClass$ = this.todosService.todos$.pipe(
            map((todos) => todos.length === 0));

        this.visibleTodos$ = combineLatest(
            this.todosService.todos$,
            this.todosService.filter$
        ).pipe(map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
            console.log('combine', todos, filter);
            if (filter === FilterEnum.active) {
                return todos.filter(todo => !todo.isCompleted)
            } else if (filter === FilterEnum.completed) {
                return todos.filter(todo => todo.isCompleted)
            }
            return todos;
        }
        ));
    }
}