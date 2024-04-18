import { action, autorun, makeObservable, observable } from "mobx";
import { Todo } from "../models/todo";

export class TodoStore {
  public todos: Todo[] = [];

  private static KEY = "todos";

  constructor() {
    const localStorageTodos = localStorage.getItem(TodoStore.KEY);

    if (localStorageTodos) {
      this.todos = JSON.parse(localStorageTodos).map((todo: Todo) => {
        return new Todo(todo.id, todo.text, todo.done);
      });
    }

    makeObservable(this, {
      todos: observable,
      add: action,
      remove: action,
    });

    autorun(() => {
      localStorage.setItem(TodoStore.KEY, JSON.stringify(this.todos));
    })
  }

  public add(todo: Todo) {
    this.todos.push(todo);
  }

  public remove(todo: Todo) {
    this.todos = this.todos.filter((t) => t !== todo);
  }
}

export const todoStore = new TodoStore();
