import { FunctionComponent } from "react";
import { TodoItemTypes } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: TodoItemTypes[];
  onToggleDone: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: FunctionComponent<TodoListProps> = ({
  todos,
  onToggleDone,
  onDelete,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
