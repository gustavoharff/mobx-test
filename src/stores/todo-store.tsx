import { action, makeObservable, observable } from "mobx";
import { Todo } from "../models/todo";

export class TodoStore {
  public todos: Todo[];

  constructor() {
    this.todos = [];

    makeObservable(this, {
      todos: observable,
      add: action,
      remove: action,
    });
  }

  public add(todo: Todo) {
    this.todos.push(todo);
  }

  public remove(todo: Todo) {
    this.todos = this.todos.filter((t) => t !== todo);
  }
}

export const todoStore = new TodoStore();