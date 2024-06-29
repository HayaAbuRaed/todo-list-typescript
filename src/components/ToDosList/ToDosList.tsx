import { List } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useToDosContext } from "../../context";
import { Theme } from "../../style/types";
import EmptyList from "./EmptyList";
import ToDoItem from "./ToDoItem";
import styles from "./styles.module.css";

const ToDosList = () => {
  const {
    state: { toDos },
  } = useToDosContext();

  const theme = useTheme<Theme>();

  return (
    <List
      className={styles.list}
      disablePadding
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        ...theme.mixins.niceScroll(7),
      }}
    >
      {toDos.length > 0 &&
        toDos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)}

      {toDos.length <= 0 && <EmptyList />}
    </List>
  );
};

export default ToDosList;
