import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../components/TodoItem";

describe("TodoItem", () => {
  it("should call onToggleDone when checkbox is clicked", () => {
    const mockOnToggleDone = jest.fn();

    render(
      <TodoItem
        todo={{ id: 1, task: "Buy coffee", isDone: false }}
        onToggleDone={mockOnToggleDone}
        onDelete={() => {}}
      />
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(mockOnToggleDone).toHaveBeenCalledWith(1);
  });
});
