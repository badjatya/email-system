// Importing Packages
import { ThemeProvider } from "styled-components";

const StyledThemeProvider = ({ children }) => {
  const theme = {
    primary: "#6C63FF",
    primaryLight: "#9e99e9",
    gray: "#6c757d",
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
