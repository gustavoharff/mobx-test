import { observer } from "mobx-react";
import { todoStore } from "../stores/todo-store";
import { DeleteOutlined } from "@ant-design/icons";
import { Todo } from "../models/todo";
import { action } from "mobx";
import { Checkbox } from "antd";
import classNames from "classnames";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = observer((props: TodoItemProps) => {
  const { todo } = props;

  return (
    <div className="flex justify-between">
      <Checkbox
        className={classNames({
          "line-through": todo.get("done"),
        })}
        checked={todo.get("done")}
        onChange={action(() => {
          todo.toggle();
        })}
      >
        {todo.get("text")}
      </Checkbox>

      <DeleteOutlined
        className="ml-auto"
        onClick={() => todoStore.remove(todo)}
      />
    </div>
  );
});
