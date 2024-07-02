import { List } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useToDosContext } from "../../context";
import { Theme } from "../../style/types";
import EmptyList from "./EmptyList";
import ToDoItem from "./ToDoItem";
import styles from "./styles.module.css";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { ToDo } from "./types";

const ToDosList = () => {
  const {
    state: { toDos },
    onReorderToDos,
  } = useToDosContext();

  const theme = useTheme<Theme>();

  const reorder = (list: ToDo[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    if (result.destination.index === result.source.index) return;

    const items = reorder(toDos, result.source.index, result.destination.index);

    onReorderToDos(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="toDos">
        {(provided) => (
          <List
            className={styles.list}
            disablePadding
            sx={{
              backgroundColor: (theme) => theme.palette.background.paper,
              ...theme.mixins.niceScroll(7),
            }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.length > 0 &&
              toDos.map((todo, index) => <ToDoItem key={todo.id} todo={todo} index={index}/>)}

            {provided.placeholder}
            
            {toDos.length <= 0 && <EmptyList />}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ToDosList;
