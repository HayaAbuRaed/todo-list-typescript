import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import ToDosContext, { initialState } from "./ToDosContext";
import toDosReducer from "./toDosReducer";
import { NewToDo, ToDo, ToDosReducerActionType } from "./types";

const ToDosContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toDos, dispatch] = useReducer(toDosReducer, initialState, () => {
    const localData = localStorage.getItem("toDos");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const onAddToDo = (toDo: NewToDo) => {
    dispatch({ type: ToDosReducerActionType.ADD_TODO, payload: toDo });
  };
  const onToggleToDo = (id: number) => {
    dispatch({ type: ToDosReducerActionType.TOGGLE_TODO, payload: id });
  };
  const onUpdateToDo = (toDo: ToDo) => {
    dispatch({ type: ToDosReducerActionType.UPDATE_TODO, payload: toDo });
  };
  const onDeleteToDo = (id: number) => {
    dispatch({ type: ToDosReducerActionType.DELETE_TODO, payload: id });
  };
  const onReorderToDos = (toDos: ToDo[]) => {
    dispatch({ type: ToDosReducerActionType.REORDER_TODOS, payload: toDos });
  };

  return (
    <ToDosContext.Provider
      value={{
        state: toDos,
        onAddToDo,
        onToggleToDo,
        onUpdateToDo,
        onDeleteToDo,
        onReorderToDos,
      }}
    >
      {children}
    </ToDosContext.Provider>
  );
};

export default ToDosContextProvider;
