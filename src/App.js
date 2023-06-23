import "./App.css";
import Homepage from "./components/homepage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React  from 'react';


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
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Homepage />
    </ThemeProvider>
    </>
  );
}

export default App;
