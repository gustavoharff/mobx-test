import { observer } from "mobx-react";
import { TodoItem } from "./todo-item";
import { Todo } from "../models/todo";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = observer((props: TodoListProps) => {
  const { todos } = props;

  console.log('render: TodoList')

  return (
    <div style={{ marginBottom: 24 }}>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.get("id")} />
      ))}
    </div>
  );
});
