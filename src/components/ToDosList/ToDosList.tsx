import { List } from "@mui/material";
import { useToDosContext } from "../../context";
import EmptyList from "./EmptyList";
import ToDoItem from "./ToDoItem";
import styles from "./styles.module.css";
import { ToDo } from "./types";

// temporary fake data
// const tempToDos = [
//   {
//     id: 1,
//     title: "Do something nice for someone you care about",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "Memorize a poem",
//     completed: true,
//   },
//   {
//     id: 3,
//     title: "Watch a classic movie",
//     completed: true,
//   },
//   {
//     id: 4,
//     title: "Watch a documentary",
//     completed: false,
//   },
//   {
//     id: 5,
//     title: "Invest in cryptocurrency",
//     completed: false,
//   },
//   {
//     id: 6,
//     title:
//       "Contribute code or a monetary donation to an open-source software project",
//     completed: false,
//   },
// ];

const ToDosList = () => {
  const {
    state: { toDos },
  } = useToDosContext();

  console.log(toDos);

  return (
    <List
      className={styles.list}
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        padding: 0,
      }}
    >
      {(toDos as ToDo[]).length > 0 &&
        toDos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)}

      {toDos.length <= 0 && <EmptyList />}
    </List>
  );
};

export default ToDosList;
