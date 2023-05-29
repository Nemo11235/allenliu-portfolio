import React from "react";
import linkedinLogo from "../../Images/linkedin-logo.png";
import gmailLogo from "../../Images/gmail-logo.png";
import githubLogo from "../../Images/github-logo.png";
import facebookLogo from "../../Images/facebook-logo.png";
import "./SocialBar.scss";

const SocialBar = () => {
  return (
    <div className="button-box-container">
      <a
        href="https://www.linkedin.com/in/zhexian-liu-124444155//"
        target="_blank"
        rel="noreferrer"
        className="button-box-link"
      >
        <img
          src={linkedinLogo}
          alt="LinkedIn Logo"
          className="button-box-image"
        />
      </a>
      <a
        href="mailto:allenliu123123@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="button-box-link"
      >
        <img src={gmailLogo} alt="Gmail Logo" className="button-box-image" />
      </a>
      <a
        href="https://github.com/Nemo11235/"
        target="_blank"
        rel="noreferrer"
        className="button-box-link"
      >
        <img src={githubLogo} alt="GitHub Logo" className="button-box-image" />
      </a>
      <a
        href="https://www.facebook.com/zhexian.liu.5/"
        target="_blank"
        rel="noreferrer"
        className="button-box-link"
      >
        <img
          src={facebookLogo}
          alt="Facebook Logo"
          className="button-box-image"
        />
      </a>
    </div>
  );
};

export default SocialBar;
