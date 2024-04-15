import { ChangeEvent, FunctionComponent, useState } from "react";

interface InputProps {
  onSearch: (searchTerm: string) => void;
}

const Input: FunctionComponent<InputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default Input;
