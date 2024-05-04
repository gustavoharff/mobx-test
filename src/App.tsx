import { observer } from "mobx-react";
import { TodoForm } from "./components/todo-form";
import { todoStore } from "./stores/todo-store";
import { TodoList } from "./components/todo-list";
import { Divider } from "antd";
import classNames from "classnames";

export const App = observer(() => {
  return (
    <div
      className={classNames(
        "flex flex-col items-center max-w-md mx-auto p-4 mt-8",
        "border border-solid border-gray-200 rounded-md"
      )}
    >
      <h1>Todo App</h1>

      <TodoList todos={todoStore.todos} />

      <Divider />

      <TodoForm />
    </div>
  );
});
