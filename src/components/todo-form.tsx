import { observer } from "mobx-react";
import { Todo } from "../models/todo";
import { Button, Form, Input } from "antd";
import { todoStore } from "../stores/todo-store";

export const TodoForm = observer(() => {
  const [form] = Form.useForm();

  console.log('render: TodoForm')

  return (
    <Form
      form={form}
      onFinish={(values) => {
        const todo = new Todo({
          id: crypto.randomUUID(),
          text: values.text,
          done: false,
        });

        todoStore.add(todo);

        form.resetFields();
      }}
      style={{ maxWidth: 450 }}
    >
      <Form.Item label="Text" name="text">
        <Input />
      </Form.Item>

      <Button htmlType="submit">Add</Button>
    </Form>
  );
});
