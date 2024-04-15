import { FunctionComponent, useMemo, useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
import "./index.scss";
import { TaskItem } from "./types";

const initialData: TaskItem[] = [
  { id: 1, name: "Task 1" },
  { id: 2, name: "Task 2" },
  { id: 3, name: "Meeting" },
];

const Task2: FunctionComponent = () => {
  const data = useMemo(() => initialData, []);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="task-2">
      <h1>Search Item</h1>
      <Input onSearch={handleSearch} />
      <br />
      <List data={filteredData} />
    </div>
  );
};

export default Task2;
