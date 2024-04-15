import { FunctionComponent } from "react";
import { TaskItem } from "../types";
import Item from "./Item";

interface ListProps {
  data: TaskItem[];
}

const List: FunctionComponent<ListProps> = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default List;
