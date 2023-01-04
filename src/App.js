import { CssBaseline } from "@mui/material";
// import "./App.css";
import DefaultCard from "./components/atoms/DefaultCard";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "./styles/theme";
function App() {
  const theme = getTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <DefaultCard />;
    </ThemeProvider>
  );
}

export default App;
