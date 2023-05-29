import React, { useEffect } from "react";
import "./HomePage.scss";
import NavBar from "../Components/NavBar/NavBar";
import SocialBar from "../Components/SocialBar/SocialBar";
import Rellax from "rellax";

function HomePage() {
  function scrollToAbout() {
    const element = document.getElementsByClassName("intro-card")[0];
    element.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToTop() {
    const element = document.getElementsByClassName("root")[0];
    element.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    new Rellax(".rellax");
  }, []);

  return (
    <div className="root">
      <SocialBar />
      <button class="back-top" onClick={scrollToTop}>
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Back to top</span>
      </button>
      <NavBar />
      <div className="welcome-card">
        <div className="welcome-info">
          <div className="rellax" data-rellax-speed="5">
            <h1 className="welcome-msg">Hi, my name is Allen</h1>
          </div>
          <div className="intro">
            <div className="rellax" data-rellax-speed="3">
              <p>
                This portfolio showcases my skills, projects, and experience.
              </p>
            </div>
          </div>
          <div className="rellax" data-rellax-speed="1">
            <button className="btn-toAbout" onClick={scrollToAbout}>
              Get started <span class="icon">&#10148;</span>
            </button>
          </div>
        </div>
      </div>
      <div className="intro-card">
        <div className="intro-left">
          <div className="selfie-container"></div>
          <div className="selfie"></div>
          <h1>Allen Liu</h1>
        </div>
        <div className="intro-right">
          <div className="self-intro-container">
            <h1>About Me</h1>
            <p>
              Hello, I'm an immigrant from China who moved to the US in 2016.
              Since then, I've been pursuing my passion for computer science and
              making new friends in this exciting new environment.
            </p>
            <p>
              I'm also a proud owner of two adorable cats named MeiMei and
              XiaoHei, or as they're affectionately known, Pusheen and Blackie.{" "}
            </p>
            <p>
              Recently, I graduated from SJSU and am eager to launch my career
              with a fulfilling full-time job. As someone who is enthusiastic,
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
            least once.
          </h1>
          <h2>———— Friedrich Wilhelm Nietzsche</h2>
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
