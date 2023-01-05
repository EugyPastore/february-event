import { CssBaseline } from "@mui/material";
import React from "react";

// import "./App.css";
import DefaultCard from "./components/atoms/DefaultCard";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "./styles/theme";
import ResponsiveAppBar from "./components/molecules/ResponsiveAppBar";
function App() {
  const theme = getTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <ResponsiveAppBar></ResponsiveAppBar>
      <DefaultCard />
    </ThemeProvider>
  );
}

export default App;
