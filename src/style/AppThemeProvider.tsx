import { ThemeProvider } from "@mui/material/styles";
import appTheme from "./appTheme";
import { FC, PropsWithChildren } from "react";
import { CssBaseline } from "@mui/material";

const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={appTheme}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  );
};

export default AppThemeProvider;
