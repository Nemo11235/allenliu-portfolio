import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import paths from "../Utils/paths";

import "./NavBar.scss";

function NavBar() {
  let navigate = useNavigate();
  function goHome() {
    navigate(paths.home);
    setIsOpen(!isOpen);
  }

  function goThank() {
    navigate(paths.thank);
    setIsOpen(!isOpen);
  }

  function goResume() {
    navigate(paths.resume);
    setIsOpen(!isOpen);
  }

  function goAbout() {
    navigate(paths.about);
    setIsOpen(!isOpen);
  }

  const [isOpen, setIsOpen] = useState(false);

  function hadnleDropdownClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="navbar-div">
      <nav>
        <ul>
          <li onClick={goHome}> Allen</li>
          <li onClick={goHome}> Home</li>
          <li onClick={goAbout}>About</li>
          <li>Projects</li>
          <li onClick={goResume}>Resume</li>
          <li onClick={goThank}>Special Thanks</li>
        </ul>
      </nav>
      <div className="dropdown">
        <div className="dropdown-toggle" onClick={hadnleDropdownClick}>
          <label for="menu-icon">&#9776;</label>
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            <li onClick={goHome}> Home</li>
            <li>About</li>
            <li>Projects</li>
            <li onClick={goResume}>Resume</li>
            <li onClick={goThank}>Special Thanks</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
