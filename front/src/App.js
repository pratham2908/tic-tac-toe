import "./App.css";
import LoginPage from "./Login/LoginPage"
import RegisterPage from "./Login/RegisterPage.js";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Board from "./board/Board.js";
import { Navigate } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/play" element={<Board />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
