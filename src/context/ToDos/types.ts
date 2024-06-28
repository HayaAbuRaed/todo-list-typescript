export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface NewToDo extends Omit<ToDo, "id"> {}

export interface ToDosState {
  toDos: ToDo[];
}

export interface ToDosContextValue {
  state: ToDosState;
  onAddToDo: (toDo: NewToDo) => void;
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
  | { type: ToDosReducerActionType.ADD_TODO; payload: NewToDo }
  | { type: ToDosReducerActionType.TOGGLE_TODO; payload: number }
  | { type: ToDosReducerActionType.DELETE_TODO; payload: number };
