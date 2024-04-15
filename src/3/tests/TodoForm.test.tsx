import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "../components/TodoForm";

describe("TodoForm", () => {
  it("should call onAddTodo with correct values on submit", () => {
    const mockOnAddTodo = jest.fn();
    render(<TodoForm onAddTodo={mockOnAddTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new todo.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    userEvent.type(inputElement, "Buy groceries");
    fireEvent.click(buttonElement);

    expect(mockOnAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      task: "Buy groceries",
      isDone: false,
    });
  });
});
