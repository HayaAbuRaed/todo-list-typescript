import { createContext } from "react";
import { ToDosContextValue, ToDosState } from "./types";

const savedToDos = localStorage.getItem("toDos");

export const initialState: ToDosState = {
  toDos: savedToDos ? JSON.parse(savedToDos) : [],
};

const ToDosContext = createContext<ToDosContextValue>({
  toDos: initialState,
  onAddToDo: () => {},
  onToggleToDo: () => {},
  onUpdateToDo: () => {},
  onDeleteToDo: () => {},
});

export default ToDosContext;
