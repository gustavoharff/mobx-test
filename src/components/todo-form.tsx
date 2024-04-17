import { observer } from "mobx-react";
import { Todo } from "../models/todo";
import { Button, Form, Input } from "antd";
import { todoStore } from "../stores/todo-store";

export const TodoForm = observer(() => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      onFinish={(values) => {
        todoStore.add(new Todo(null, values.text, false));

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
