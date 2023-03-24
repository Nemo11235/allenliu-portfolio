import React from "react";
import "./HomePage.scss";
import NavBar from "../NavBar/NavBar";

function HomePage() {
  return (
    <div className="root">
      <NavBar />
      <div className="welcome-div">
        <div className="welcome-info">
          <h1 className="welcome-msg">Hi, my name is Allen</h1>
          <div className="intro">
            <p>This portfolio showcases my skills, projects, and experience.</p>
          </div>
          <button className="btn-viewProject">View Projects</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
