import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';


@Component({
    selector: 'app-todos-header',
    templateUrl: './header.component.html',
})


export class HeaderComponent {
    text: string = ""

    constructor(private todoservice: TodosService) { }

    changeText(event: Event) {
        const target = event.target as HTMLInputElement;
        console.log(target.value);

    }
    addTodo(): void {
        this.todoservice.addTodo(this.text);
        this.text='';
    }

}
