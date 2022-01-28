// Importing Packages
import { ThemeProvider } from "styled-components";

const StyledThemeProvider = ({ children }) => {
  const theme = {
    primary: "#6C63FF",
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
