import { ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { ToDoItemProps } from "./types";
import styles from "./styles.module.css";
import ToDoCheckBox from "../shared/ToDoCheckBox/ToDoCheckBox";

const ToDoItem: FC<ToDoItemProps> = ({ todo }) => {
  const { title } = todo;

  return (
    <ListItem className={styles.listItem} sx={{ padding: "0.5em 0" }}>
      <ToDoCheckBox />
      <Typography>{title}</Typography>
    </ListItem>
  );
};

export default ToDoItem;
