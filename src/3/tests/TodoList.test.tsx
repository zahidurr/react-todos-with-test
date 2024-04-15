import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList", () => {
  it("renders the correct number of TodoItem components", () => {
    const todos = [
      { id: 1, task: "Task 1", isDone: false },
      { id: 2, task: "Task 2", isDone: true },
    ];

    render(
      <TodoList todos={todos} onToggleDone={() => {}} onDelete={() => {}} />
    );

    const todoItems = screen.getAllByRole("listitem");
    expect(todoItems.length).toBe(2);
  });
});
