import { List } from "@mui/material";
import ToDoItem from "./ToDoItem";

// temporary fake data
const toDos = [
  {
    id: 1,
    title: "Do something nice for someone you care about",
    completed: false,
  },
  {
    id: 2,
    title: "Memorize a poem",
    completed: true,
  },
  {
    id: 3,
    title: "Watch a classic movie",
    completed: true,
  },
  {
    id: 4,
    title: "Watch a documentary",
    completed: false,
  },
  {
    id: 5,
    title: "Invest in cryptocurrency",
    completed: false,
  },
  {
    id: 6,
    title:
      "Contribute code or a monetary donation to an open-source software project",
    completed: false,
  },
];

const ToDosList = () => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "550px",
        backgroundColor: (theme) => theme.palette.background.paper,
        borderRadius: 1.5,
        padding: 0,
      }}
    >
      {toDos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default ToDosList;
