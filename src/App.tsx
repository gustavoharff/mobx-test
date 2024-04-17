import { observer } from "mobx-react";
import { TodoForm } from "./components/todo-form";
import { todoStore } from "./stores/todo-store";
import { DeleteOutlined } from "@ant-design/icons";

export const App = observer(() => {
  return (
    <div>
      <h1>Todo App</h1>

      <div style={{ marginBottom: 24 }}>
        {todoStore.todos.map((todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => todo.toggle()}
            />

            {todo.text}

            <DeleteOutlined
              style={{ marginLeft: 8 }}
              onClick={() => todoStore.remove(todo)}
            />
          </div>
        ))}
      </div>

      <TodoForm />
    </div>
  );
});
