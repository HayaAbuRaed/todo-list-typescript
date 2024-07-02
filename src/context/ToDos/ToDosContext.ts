import { createContext } from "react";
import { ToDosContextValue, ToDosState } from "./types";

export const initialState: ToDosState = {
  toDos: [],
};

const ToDosContext = createContext<ToDosContextValue>({
  state: initialState,
  onAddToDo: () => {},
  onToggleToDo: () => {},
  onUpdateToDo: () => {},
  onDeleteToDo: () => {},
  onReorderToDos: () => {},
});

export default ToDosContext;
