import CheckCircleIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CircleIcon from "@mui/icons-material/CircleOutlined";
import { Checkbox, CheckboxProps } from "@mui/material";
import { FC } from "react";

const ToDoCheckBox: FC<CheckboxProps> = (props) => {
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
      {...props}
    />
  );
};

export default ToDoCheckBox;
