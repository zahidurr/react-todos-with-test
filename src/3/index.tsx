import { FunctionComponent, useState } from "react";
import Search from "./components/Search";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.scss";
import { TodoItemTypes } from "./types";

const Task3: FunctionComponent = () => {
  const [todos, setTodos] = useState<TodoItemTypes[]>([]);

  const addTodo = (newTodo: TodoItemTypes) => {
    setTodos([...todos, newTodo]);
  };

  const toggleTodoDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div id="task-3" className="todo-app">
      <h1>Todo List</h1>
      <div className="header">
        <Search onSearchChange={handleSearchChange} />
        <TodoForm onAddTodo={addTodo} />
      </div>

      <h2>Pending Todos</h2>
      <TodoList
        todos={filteredTodos.filter((todo) => !todo.isDone)}
        onToggleDone={toggleTodoDone}
        onDelete={deleteTodo}
      />

      <h2>Done Todos</h2>
      <TodoList
        todos={filteredTodos.filter((todo) => todo.isDone)}
        onToggleDone={toggleTodoDone}
        onDelete={deleteTodo}
      />
    </div>
  );
};

export default Task3;
