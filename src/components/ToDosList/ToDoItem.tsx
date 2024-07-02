import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { IconButton, ListItem, Stack, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import { FC, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useToDosContext } from "../../context";
import TextField from "../shared/TextField";
import ToDoCheckBox from "../shared/ToDoCheckBox/ToDoCheckBox";
import styles from "./styles.module.css";
import { ToDoItemProps } from "./types";

interface FormValues {
  title: string;
  completed: boolean;
}

const ToDoItem: FC<ToDoItemProps> = ({ todo, index }) => {
  const [updateMode, setUpdateMode] = useState(false);

  const { title } = todo;

  const { onDeleteToDo, onToggleToDo, onUpdateToDo } = useToDosContext();

  const handleUpdateButtonClick = () => {
    setUpdateMode((prev) => !prev);
  };

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    setUpdateMode(false);
    onUpdateToDo({ ...todo, title: values.title });
    resetForm();
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <ListItem className={styles.listItem} sx={{ padding: "0.5em 0" }}>
            <ToDoCheckBox
              onClick={() => onToggleToDo(todo.id)}
              checked={todo.completed}
            />

            {updateMode ? (
              <Formik
                initialValues={{ title: todo.title, completed: false }}
                onSubmit={handleSubmit}
              >
                <Form style={{ width: "100%" }}>
                  <TextField
                    name="title"
                    autoFocus
                    style={{ backgroundColor: "#ddd", borderRadius: "5px" }}
                  />
                </Form>
              </Formik>
            ) : (
              <Typography>{title}</Typography>
            )}

            <Stack
              direction="row"
              marginLeft="auto"
              gap={0.75}
              paddingInline={1.2}
            >
              <IconButton
                aria-label="edit"
                sx={{ ":hover": { color: "#1565c0" }, padding: 0 }}
                disableRipple
                onClick={handleUpdateButtonClick}
              >
                <EditIcon fontSize="small" />
              </IconButton>

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
        </div>
      )}
    </Draggable>
  );
};

export default ToDoItem;
