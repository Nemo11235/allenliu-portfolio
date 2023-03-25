import React from "react";
import "./HomePage.scss";
import NavBar from "../NavBar/NavBar";

function HomePage() {
  function scrollToAbout() {
    const element = document.getElementsByClassName("intro-div")[0];
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="root">
      <NavBar />
      <div className="welcome-div">
        <div className="welcome-info">
          <h1 className="welcome-msg">Hi, my name is Allen</h1>
          <div className="intro">
            <p>This portfolio showcases my skills, projects, and experience.</p>
          </div>
          <button className="btn-viewProject" onClick={scrollToAbout}>
            Get started <span class="icon">&#10148;</span>
          </button>
        </div>
      </div>

      <div className="intro-div">
        <div className="intro-left">
          <div className="selfie"></div>
          <h1>Allen Liu</h1>
        </div>
        <div className="intro-right">
          <div className="self-intro-contianer">
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="quote">
        <div className="quote-container">
          <h1>
            We should consider every day lost in which we have not danced at
            least once
          </h1>
          <h2>———— Friedrich Nietzsche</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
