import { Component, OnInit, DoCheck } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Task } from 'src/app/module/task';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit, DoCheck {
  constructor(private serv: TodoService) {}

  tasks!: Task[];

  valueInput: string = '';

  ngOnInit(): void {
    this.tasks = this.serv.returnTasks();
  }
  ngDoCheck(): void {
    this.tasks = this.serv.returnTasks();
  }

  addTask() {
    this.serv.addTask(this.valueInput);
  }
  changeComplatedBool(id: number) {
    this.serv.changeComplatedBool(id);
    console.log(this.serv.tasks);
  }
  removeTask(id: number) {
    this.serv.removeTask(id);
  }
}
