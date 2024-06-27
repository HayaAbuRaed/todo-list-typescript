import { ThemeOptions, createTheme } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#116466",
    },
    secondary: {
      main: "#ef9a9a",
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
