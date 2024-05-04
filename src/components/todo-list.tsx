import { observer } from "mobx-react";
import { TodoItem } from "./todo-item";
import { Todo } from "../models/todo";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = observer((props: TodoListProps) => {
  const { todos } = props;

  return (
    <div className="flex flex-col gap-1 w-full">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.get("id")} />
      ))}
    </div>
  );
});
