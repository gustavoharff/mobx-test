import { action, makeObservable, observable } from "mobx";

export class Todo {
  public id: string;

  public text: string;

  public done: boolean;

  constructor(id: string | null, text: string, done: boolean) {
    this.id = id ?? crypto.randomUUID();
    this.text = text;
    this.done = done;

    makeObservable(this, {
      id: observable,
      text: observable,
      done: observable,
      toggle: action
    });
  }

  public toggle() {
    this.done = !this.done;
  }
}
