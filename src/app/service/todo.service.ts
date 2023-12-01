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
  constructor() {}
  returnTasks() {
    return this.tasks;
  }
  addTasks(data: string) {
    let newTask: Task = {
      id: this.tasks[this.tasks.length - 1].id + 1,
      title: data,
      completed: false,
    };
    this.tasks.push(newTask);
  }
  removeTasks(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  changeComplatedBool(id: number) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }
}
