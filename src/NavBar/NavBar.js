import React from "react";
import { useNavigate } from "react-router-dom";
import paths from "../Utils/paths";

import "./NavBar.scss";

function NavBar() {
  let navigate = useNavigate();
  function goHome() {
    navigate(paths.home);
  }

  function goThank() {
    navigate(paths.thank);
  }

  function goResume() {
    navigate(paths.resume);
  }

  return (
    <div className="navbar-div">
      <nav>
        <ul>
          <li onClick={goHome}> Allen</li>
          <li onClick={goHome}> Home</li>
          <li>About</li>
          <li>Projects</li>
          <li onClick={goResume}>Resume</li>
          <li onClick={goThank}>Special Thanks</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
