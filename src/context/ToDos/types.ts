export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface ToDosState {
  toDos: ToDo[];
}

export interface ToDosContextValue {
  toDos: ToDosState;
  onAddToDo: (toDo: ToDo) => void;
  onToggleToDo: (id: number) => void;
  onUpdateToDo: (toDo: ToDo) => void;
  onDeleteToDo: (id: number) => void;
}

export enum ToDosReducerActionType {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  DELETE_TODO = "DELETE_TODO",
}

export type ToDosReducerAction =
  | { type: ToDosReducerActionType.UPDATE_TODO; payload: ToDo }
  | { type: ToDosReducerActionType.ADD_TODO; payload: ToDo }
  | { type: ToDosReducerActionType.TOGGLE_TODO; payload: number }
  | { type: ToDosReducerActionType.DELETE_TODO; payload: number };
