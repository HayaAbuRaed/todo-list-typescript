import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { IconButton, ListItem, Stack, Typography } from "@mui/material";
import { FC } from "react";
import ToDoCheckBox from "../shared/ToDoCheckBox/ToDoCheckBox";
import styles from "./styles.module.css";
import { ToDoItemProps } from "./types";
import { useToDosContext } from "../../context";

const ToDoItem: FC<ToDoItemProps> = ({ todo }) => {
  const { title } = todo;

  const { onDeleteToDo } = useToDosContext();

  return (
    <ListItem className={styles.listItem} sx={{ padding: "0.5em 0" }}>
      <ToDoCheckBox />
      <Typography>{title}</Typography>

      <Stack direction="row" marginLeft="auto" gap={0.75} paddingInline={1.2}>
        {/* <IconButton
          aria-label="edit"
          sx={{ ":hover": { color: "#1565c0" }, padding: 0 }}
          disableRipple
        >
          <EditIcon fontSize="small" />
        </IconButton> */}

        <IconButton
          aria-label="delete"
          sx={{ ":hover": { color: "#d50000" }, padding: 0 }}
          disableRipple
          onClick={() => onDeleteToDo(todo.id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default ToDoItem;
