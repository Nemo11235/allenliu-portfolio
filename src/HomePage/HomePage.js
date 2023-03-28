import React from "react";
import "./HomePage.scss";
import NavBar from "../NavBar/NavBar";

function HomePage() {
  function scrollToAbout() {
    const element = document.getElementsByClassName("intro-card")[0];
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="root">
      <NavBar />
      <div className="welcome-card">
        <div className="welcome-info">
          <h1 className="welcome-msg">Hi, my name is Allen</h1>
          <div className="intro">
            <p>This portfolio showcases my skills, projects, and experience.</p>
          </div>
          <button className="btn-toAbout" onClick={scrollToAbout}>
            Get started <span class="icon">&#10148;</span>
          </button>
        </div>
      </div>

      <div className="intro-card">
        <div className="intro-left">
          <div className="selfie"></div>
          <h1>Allen Liu</h1>
        </div>
        <div className="intro-right">
          <div className="self-intro-contianer">
            <h1>About Me</h1>
            <p>
              Hello, I'm an immigrant from China who moved to the US in 2016.
              Since then, I've been pursuing my passion for computer science and
              making new friends in this exciting new environment. I'm also a
              proud owner of two adorable cats named MeiMei and XiaoHei, or as
              they're affectionately known, Pusheen and Blackie. Recently, I
              graduated from SJSU and am eager to launch my career with a
              fulfilling full-time job. As someone who is enthusiastic,
              diligent, and always eager to learn, I'm confident that I can make
              a valuable contribution to any team. Thank you for taking the time
              to get to know me!{" "}
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
      <div className="project-card">
        <div className="project-left"></div>
        <div className="project-right"></div>
      </div>
    </div>
  );
}

export default HomePage;
