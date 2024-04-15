import { FunctionComponent, useState } from "react";
import { TodoItemTypes } from "../types";

interface TodoFormProps {
  onAddTodo: (newTodo: TodoItemTypes) => void;
}

const TodoForm: FunctionComponent<TodoFormProps> = ({ onAddTodo }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask.trim()) {
      onAddTodo({
        id: Date.now(),
        task: newTask,
        isDone: false,
      });
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
