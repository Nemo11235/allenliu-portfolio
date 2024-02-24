import React from "react";
import "./ProjectPage.scss";
import SocialBar from "../Components/SocialBar/SocialBar";
import NavBar from "../Components/NavBar/NavBar";
function ProjectPage() {
  return (
    <div className="root">
      <NavBar />
      <SocialBar />
      <div className="space"></div>
      <div className="project-container">
        <h1 className="page-p-title">Wordle Game</h1>
        <p className="page-p-intro">
          Led a team of 6 to deliver an HTML5 online multiplayer game inspired
          by Wordle, built with a server, google account login, and database.
        </p>
        <p className="page-p-intro">
          Responsible for overseeing the team throughout the entire development
          process, actively engaged in functionality design and implementation,
          UX/UI design, and the execution of QA testing.
        </p>
        <p className="page-p-intro">
          Implemented socket.io server for multiplayer modes
        </p>
        <p className="page-p-intro">
          Implemented core functions including saving game progress, game stats,
          multi-session, and pause/resume
        </p>
      </div>
      <div className="project-container">
        <h1 className="page-p-title">Frontdesk App</h1>
        <p className="page-p-intro">
          A Java Swing-based GUI application for the badminton club to help
          reduce paperwork and increase efficiency.
        </p>
        <p className="page-p-intro">
          Enhanced front desk operational efficiency by 60%, demonstrating
          sustained reliability over the course of one year through consistent
          maintenance and continuous improvements based on user feedback.
        </p>
        <p className="page-p-intro">
          Record daily monetary transactions, decreased 80% of recording errors,
          reduced 50% time for end-of-day settlement and record-keeping.
        </p>
        <p className="page-p-intro">
          Membership record & search system to maintain 200+ member information,
          which reduced the time of checking customer information to nearly
          zero.
        </p>
        <p className="page-p-intro">
          Integrated garbage collection feature to automatically remove expired
          records.
        </p>
        <p className="page-p-intro">
          Support multi-language inputs and displays.
        </p>
      </div>
      <div className="project-container">
        <h1 className="page-p-title">Wordle Game</h1>
        <p className="page-p-intro">
          Led a team of 6 to deliver an HTML5 online multiplayer game inspired
          by Wordle, built with a server, google account login, and database.
        </p>
        <p className="page-p-intro">
          Responsible for overseeing the team throughout the entire development
          process, actively engaged in functionality design and implementation,
          UX/UI design, and the execution of QA testing.
        </p>
        <p className="page-p-intro">
          Implemented socket.io server for multiplayer modes
        </p>
        <p className="page-p-intro">
          Implemented core functions including saving game progress, game stats,
          multi-session, and pause/resume
        </p>
      </div>
      <div className="project-container">
        <h1 className="page-p-title">Mock Backend Data Transfer Page</h1>
        <p className="page-p-intro">
          A Next.js-based frontend project published on [Vercel] that showcases
          browsing, managing data, and Figma design.
        </p>
        <p className="page-p-intro">
          Displays an interactive infinite scrolling list of users, allows the
          user to apply various filters based on the properties of the users in
          the list.
        </p>
        <p className="page-p-intro">
          Implemented the feature of mocking data loading behavior with the
          back-end server.
        </p>
      </div>
    </div>
  );
}

export default ProjectPage;
