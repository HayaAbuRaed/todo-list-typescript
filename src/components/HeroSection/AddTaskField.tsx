import CircleIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Checkbox, Stack } from "@mui/material";
import { StyledTextField } from "./styled";

const AddTaskField = () => {
  return (
    <Stack
      width="100%"
      direction="row"
      borderRadius={1.5}
      sx={{ backgroundColor: (theme) => theme.palette.background.paper }}
    >
      <Checkbox
        icon={<CircleIcon />}
        checkedIcon={<CheckCircleIcon />}
        color="secondary"
        disableRipple
        sx={{
          color: "#8c8c8c",
          ":hover": { color: "pink" },
        }}
      />
      <StyledTextField placeholder="Enter your todo here..." fullWidth />
    </Stack>
  );
};

export default AddTaskField;
