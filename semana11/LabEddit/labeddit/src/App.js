import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Router.js";
import Header from "./components/Header";
import theme from "./constants/theme"
import { ThemeProvider } from "styled-components";

function App() {
  const token = localStorage.getItem("token")
  const [rightButton, setRightButton] = useState(token?"Logout":"Login")

  return (
    <div>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButton={rightButton}  setRightButton={ setRightButton}/>
        <Router setRightButton={setRightButton}/>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
