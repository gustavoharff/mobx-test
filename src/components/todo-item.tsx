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

  console.log('render: TodoItem')

  return (
    <div key={todo.get('id')}>
      <input
        type="checkbox"
        checked={todo.get('done')}
        onChange={action(() => {
          todo.toggle();
        })}
      />

      <span
        style={{
          marginLeft: 8,
          textDecoration: todo.get('done') ? "line-through" : "none",
        }}
      >
        {todo.get('text')}
      </span>

      <DeleteOutlined
        style={{ marginLeft: 8 }}
        onClick={() => todoStore.remove(todo)}
      />
    </div>
  );
});
