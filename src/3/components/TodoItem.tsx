import { FunctionComponent } from "react";
import { TodoItemTypes } from "../types";

interface TodoItemProps {
  todo: TodoItemTypes;
  onToggleDone: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: FunctionComponent<TodoItemProps> = ({
  todo,
  onToggleDone,
  onDelete,
}) => {
  return (
    <li className={todo.isDone ? "done" : ""}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => onToggleDone(todo.id)}
      />
      <span>{todo.task}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
