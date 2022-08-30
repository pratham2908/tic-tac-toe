import { useEffect } from "react";
import "./App.css";
import LoginPage from "./Login/LoginPage"
import RegisterPage from "./Login/RegisterPage.js";
import { appendScript } from "./appendScript.js";


function App() {

  useEffect(() => {
    appendScript("./loopGame.js");
  })
  return (
    <div className="App">
      <LoginPage />
      <RegisterPage />
    </div>
  );
}

export default App;
