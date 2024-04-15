import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../components/Search";

describe("Search", () => {
  it("should render the input field", () => {
    render(<Search onSearchChange={() => {}} />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("should call onSearchChange prop when input value changes", () => {
    const mockOnSearchChange = jest.fn();
    render(<Search onSearchChange={mockOnSearchChange} />);

    const inputElement = screen.getByRole("textbox");
    userEvent.type(inputElement, "hello");

    expect(mockOnSearchChange).toHaveBeenCalledTimes(5);
    expect(mockOnSearchChange).toHaveBeenCalledWith("hello");
  });
});
