import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Router.js"
import Header from "./components/Header"

function App() {
  const token = localStorage.getItem("token")
  const [rightButton, setRightButton] = useState(token?"Logout":"Login")

  return (
    <div>
      <BrowserRouter>
        <Header rightButton={rightButton}  setRightButton={ setRightButton}/>
        <Router setRightButton={setRightButton}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
