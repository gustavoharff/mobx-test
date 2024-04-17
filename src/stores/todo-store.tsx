import { action, makeObservable, observable } from "mobx";
import { Todo } from "../models/todo";

export class TodoStore {
  public todos: Todo[];

  private static KEY = "todos";

  constructor() {
    const localStorageTodos = localStorage.getItem(TodoStore.KEY);

    this.todos = localStorageTodos ? JSON.parse(localStorageTodos) : [];

    makeObservable(this, {
      todos: observable,
      add: action,
      remove: action,
    });
  }

  public add(todo: Todo) {
    this.todos.push(todo);

    this.sync();
  }

  public remove(todo: Todo) {
    this.todos = this.todos.filter((t) => t !== todo);

    this.sync();
  }

  private sync() {
    localStorage.setItem(TodoStore.KEY, JSON.stringify(this.todos));
  }
}

export const todoStore = new TodoStore();
