import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Task } from 'src/app/module/task';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {
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
