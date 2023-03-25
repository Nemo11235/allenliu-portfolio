import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ThankPage from "./ThankPage/ThankPage";
import ResumePage from "./ResumePage/ResumePage";
import paths from "./Utils/paths";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.thank} element={<ThankPage />} />
        <Route path={paths.resume} element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;
