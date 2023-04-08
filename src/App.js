import logo from "./logo.svg";
import "./App.css";
import HomePage from "./HomePage";
import Experience from "./Experience";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
