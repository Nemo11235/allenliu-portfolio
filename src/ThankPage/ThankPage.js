import React from "react";
import NavBar from "../NavBar/NavBar";
import BothImg from "../Images/both.jpg";
import "./ThankPage.scss";

function ThankPage() {
  return (
    <div className="thankpage-div">
      <NavBar />
      <h1>My cats</h1>
      <div className="img-wrapper">
        <img src={BothImg} className="img-style" alt="An img of both cats" />
      </div>
    </div>
  );
}

export default ThankPage;
