import CheckCircleIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CircleIcon from "@mui/icons-material/CircleOutlined";
import { Checkbox } from "@mui/material";
import { FC } from "react";

const ToDoCheckBox: FC = () => {
  return (
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
  );
};

export default ToDoCheckBox;
