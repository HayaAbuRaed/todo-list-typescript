export interface ToDoCheckBoxProps {
  completed?: boolean;
  onCheck: (id: number) => void;
}
