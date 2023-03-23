import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ThankPage from "./ThankPage/ThankPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank" element={<ThankPage />} />
      </Routes>
    </Router>
  );
}

export default App;
