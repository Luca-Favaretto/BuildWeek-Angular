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
  bool: boolean = false;
  showMessage: boolean = false;
  message: string = this.serv.message;

  valueInput: string = '';

  async ngOnInit() {
    this.showMessage = true;
    await this.serv.wait2sec();
    this.showMessage = false;
    this.tasks = this.serv.returnTasks();
  }
  ngDoCheck() {
    this.tasks = this.serv.returnTasks();
    this.bool = this.serv.areAllTasksFalse();
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
  }
  async removeTask(id: number) {
    this.showMessage = true;

    await this.serv.wait2sec();
    this.showMessage = false;
    this.serv.removeTask(id);
  }
}
