import { observer } from "mobx-react";
import { todoStore } from "../stores/todo-store";
import { DeleteOutlined } from "@ant-design/icons";
import { Todo } from "../models/todo";
import { action } from "mobx";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = observer((props: TodoItemProps) => {
  const { todo } = props;

  return (
    <div key={todo.id}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={action(() => {
          todo.toggle();
        })}
      />

      <span
        style={{
          marginLeft: 8,
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <DeleteOutlined
        style={{ marginLeft: 8 }}
        onClick={() => todoStore.remove(todo)}
      />
    </div>
  );
});
