import { Component, Input } from '@angular/core';
import { TodoInterface } from '../todos/types/todo.interface';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
    @Input('todo') todoProps : TodoInterface | undefined
}