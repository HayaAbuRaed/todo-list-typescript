import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiInputLabel-root": {
    "&.Mui-focused": {
      color: theme.palette.text.primary,
    },
  },
  "& .MuiInputBase-input": {
    paddingInline: 0,
  },
}));
