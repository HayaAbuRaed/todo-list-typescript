import { ThemeOptions, createTheme } from "@mui/material/styles";
import { mixins } from "./mixins";

const themeOptions: ThemeOptions = {
  mixins: mixins,
  palette: {
    mode: "light",
    primary: {
      main: "#116466",
    },
    secondary: {
      main: "#ef9a9a",
    },
    text: {
      primary: "#1b1b1b",
      secondary: "#f1f1f1",
    },
    background: {
      default: "#1b1b1b",
      paper: "#f1f1f1",
    },
  },
  spacing: 8,
  typography: {
    fontFamily: "Sora",
    fontSize: 14,
  },
  shape: {
    borderRadius: 4,
  },
};

const appTheme = createTheme(themeOptions);

export default appTheme;
