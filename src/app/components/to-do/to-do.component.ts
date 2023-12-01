import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  constructor(private serv: TodoService) {}

  ngOnInit(): void {}
}
