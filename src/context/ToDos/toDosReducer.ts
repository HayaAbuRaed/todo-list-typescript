import {
  ToDosReducerAction,
  ToDosReducerActionType,
  ToDosState,
} from "./types";

const toDosReducer = (
  state: ToDosState,
  action: ToDosReducerAction
): ToDosState => {
  switch (action.type) {
    case ToDosReducerActionType.ADD_TODO: {
      const id = state.toDos.length + 1;
      return { toDos: [...state.toDos, { id, ...action.payload }] };
    }
    case ToDosReducerActionType.TOGGLE_TODO:
      return {
        toDos: state.toDos.map((toDo) =>
          toDo.id === action.payload
            ? { ...toDo, completed: !toDo.completed }
            : toDo
        ),
      };
    case ToDosReducerActionType.UPDATE_TODO:
      return {
        toDos: state.toDos.map((toDo) =>
          toDo.id === action.payload.id
            ? { ...toDo, title: action.payload.title }
            : toDo
        ),
      };
    case ToDosReducerActionType.DELETE_TODO:
      return {
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default toDosReducer;
