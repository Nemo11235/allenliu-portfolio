import React from "react";
import NavBar from "../NavBar/NavBar";
import BothImg from "../Images/both2.jpg";
import "./ResumePage.scss";

function ResumePage() {
  return (
    <div className="resumepage-root">
      <NavBar />
      <h1>My Resume</h1>
      <div className="img-wrapper">
        <img src={BothImg} className="img-style" alt="An img of both cats" />
      </div>
    </div>
  );
}

export default ResumePage;
