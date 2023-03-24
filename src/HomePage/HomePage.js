import React from "react";
import "./HomePage.scss";
import NavBar from "../NavBar/NavBar";

function HomePage() {
  return (
    <div className="home-div">
      <NavBar />
      <div className="welcome-div">
        <h1 className="welcome-msg">Hi, my name is Allen</h1>
        <div className="intro">
          <p>
            Hi, my name is Allen. This portfolio showcases my skills, projects,
            and experience.
          </p>
        </div>
        <button className="btn-viewProject">View Projects</button>
      </div>
    </div>
  );
}

export default HomePage;
