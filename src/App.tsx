import { observer } from "mobx-react";
import { TodoForm } from "./components/todo-form";
import { todoStore } from "./stores/todo-store";
import { TodoList } from "./components/todo-list";

export const App = observer(() => {
  return (
    <div>
      <h1>Todo App</h1>

      <TodoList todos={todoStore.todos} />

      <TodoForm />
    </div>
  );
});
