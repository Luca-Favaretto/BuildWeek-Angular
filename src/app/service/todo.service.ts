import { Injectable } from '@angular/core';
import { Task } from '../module/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks: Task[] = [
    { id: 1, title: 'cleaning my car', completed: true },
    { id: 2, title: 'shopping', completed: true },
    { id: 3, title: 'homework', completed: false },
  ];
  showMessage: boolean = false;
  message: string = 'We work for you';

  constructor() {}
  returnTasks() {
    return this.tasks;
  }
  addTask(data: string) {
    let newTask: Task = {
      id: this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1,
      title: data,
      completed: false,
    };
    this.tasks.push(newTask);
  }
  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  changeComplatedBool(id: number) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }
  wait2sec(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }
  areAllTasksTrue(): boolean {
    return this.tasks.every((task) => task.completed === true);
  }
  areAllTasksFalse(): boolean {
    return this.tasks.every((task) => task.completed === false);
  }
}
