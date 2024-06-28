export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface ToDoItemProps {
  todo: ToDo;
}
