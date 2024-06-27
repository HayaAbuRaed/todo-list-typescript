import { ThemeProvider } from "@mui/material/styles";
import appTheme from "./appTheme";
import { FC, PropsWithChildren } from "react";

const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
