import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Homepage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: 'cursive',
    fontSize:15,
  },
  status:{
    info: "#F900D1"
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
