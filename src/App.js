import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ThankPage from "./ThankPage/ThankPage";
import ResumePage from "./ResumePage/ResumePage";
import AboutPage from "./AboutPage/AboutPage";
import ProjectPage from "./ProjectsPage/ProjectPage";
import paths from "./Utils/paths";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.thank} element={<ThankPage />} />
        <Route path={paths.resume} element={<ResumePage />} />
        <Route path={paths.projects} element={<ProjectPage />} />
        <Route path={paths.about} element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
