import { Stack } from "@mui/material";
import ToDoCheckBox from "../shared/ToDoCheckBox/ToDoCheckBox";
import { StyledTextField } from "./styled";

const AddTaskField = () => {
  return (
    <Stack
      width="100%"
      direction="row"
      borderRadius={1.5}
      sx={{ backgroundColor: (theme) => theme.palette.background.paper }}
    >
      <ToDoCheckBox />
      <StyledTextField placeholder="Enter your todo here..." fullWidth />
    </Stack>
  );
};

export default AddTaskField;
