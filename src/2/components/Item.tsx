import { FunctionComponent } from "react";
import { TaskItem } from "../types";

interface ItemProps {
  item: TaskItem;
}

const Item: FunctionComponent<ItemProps> = ({ item }) => {
  return <li>{item.name}</li>;
};

export default Item;
