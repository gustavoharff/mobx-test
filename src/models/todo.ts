import { action, makeObservable, observable } from "mobx";
import { Model } from "./model";

export type TodoModel = {
  id: string;
  text: string;
  done: boolean;
};

export class Todo extends Model<TodoModel> {
  constructor(data: TodoModel) {
    super(data);

    makeObservable(this.data, {
      id: observable,
      text: observable,
      done: observable,
    });

    makeObservable(this, {
      toggle: action,
    });
  }

  public toggle() {
    this.data.done = !this.data.done;
  }
}
