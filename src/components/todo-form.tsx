import { observer } from "mobx-react";
import { Todo } from "../models/todo";
import { Button, Form, Input } from "antd";
import { todoStore } from "../stores/todo-store";

interface FormValues {
  text: string;
}

export const TodoForm = observer(() => {
  const [form] = Form.useForm<FormValues>();

  const text = Form.useWatch("text", form);

  return (
    <Form
      className="w-full"
      form={form}
      onFinish={(values) => {
        const todo = new Todo({
          id: crypto.randomUUID(),
          text: values.text,
          done: false,
        });

        todoStore.add(todo);

        form.setFieldValue("text", "");
      }}
    >
      <Form.Item label="Text" name="text">
        <Input />
      </Form.Item>

      <div className="flex justify-end w-full">
        <Button htmlType="submit" disabled={!text} type="primary">
          Add
        </Button>
      </div>
    </Form>
  );
});
