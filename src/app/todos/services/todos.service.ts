import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class TodosService{
todos$= new BehaviorSubject<TodoInterface[]>([]);

}