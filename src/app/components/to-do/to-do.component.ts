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
  bool: boolean = false;
  showMessage: boolean = false;
  message: string = this.serv.message;

  valueInput: string = '';

  async ngOnInit() {
    this.showMessage = true;
    await this.serv.wait2sec();
    this.showMessage = false;
    console.log(this.showMessage);
    this.tasks = this.serv.returnTasks();
  }
  ngDoCheck() {
    this.tasks = this.serv.returnTasks();
    this.bool = this.serv.areAllTasksTrue();
  }

  async addTask() {
    this.showMessage = true;

    await this.serv.wait2sec();
    this.showMessage = false;
    if (this.valueInput !== '') {
      this.serv.addTask(this.valueInput);
      this.valueInput = '';
    }
  }
  async changeComplatedBool(id: number) {
    this.showMessage = true;

    await this.serv.wait2sec();
    this.showMessage = false;
    this.serv.changeComplatedBool(id);
    console.log(this.serv.tasks);
  }
  async removeTask(id: number) {
    this.showMessage = true;

    await this.serv.wait2sec();
    this.showMessage = false;
    this.serv.removeTask(id);
  }
}
