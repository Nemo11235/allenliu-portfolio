import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import "./ResumePage.scss";

function ResumePage() {
  const click = () => {
    window.open(
      "https://docs.google.com/document/d/1dQDICN6xGmRdqblzUXOfMXkOvVWLeK_gfNqzkKjVOHA/edit?usp=sharing"
    );
  };
  return (
    <div className="resume-root">
      <NavBar />

      <div className="resume-container">
        <img
          className="img-gDoc"
          src={require("../Images/gDocLogo.png")}
          alt="google doc logo"
          onClick={click}
        ></img>
        <img
          onClick={click}
          className="img-resume"
          src={require("../Images/resume.png")}
          alt="resume pic"
        ></img>
      </div>
    </div>
  );
}

export default ResumePage;
