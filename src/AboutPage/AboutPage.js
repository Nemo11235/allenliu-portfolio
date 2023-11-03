import React from "react";
import "./AboutPage.scss";
import SocialBar from "../Components/SocialBar/SocialBar";
import NavBar from "../Components/NavBar/NavBar";
function AboutPage() {
  return (
    <div className="root">
      <NavBar />
      <SocialBar />
      <div className="projects-container">
        <div className="card">
          <h1>As a Badminton Coach</h1>
          <p>
            Badminton is my favorite sport, and I have dedicated a significant
            amount of time to improve my skills. During my high school years, I
            joined my school's badminton team and found this sport so appealing
            that I would even dream about playing it. It was an incredible
            experience to engage in playing, learning, and practicing all the
            skills associated with this sport to become a better player. To
            cover some of my expenses during community college, I worked at
            United Badminton Club as as a front desk attendant. While playing
            with my friends there, the head coach noticed my passion for this
            sport and decided to mentor me as his assistant coach. As a result,
            I became the youngest coach in the club. As both my badminton and
            coaching skills continued to improve, I started leading both private
            and group lessons. By the time I transferred to San Jose State
            University, I had taught approximately 100+ students, ranging from 5
            years old to 40 years old. In addition to coaching, I also provided
            racket restringing services for the club's customers, served as the
            primary judge of a local tournament, and developed a Java program to
            assist with the club's bookkeeping. I genuinely enjoy every aspect
            of this sport, and I wholeheartedly strive to excel in whatever role
            I undertake.
          </p>
        </div>
        <div className="card">
          <h1>As a Sushi Chef</h1>
          <p>
            Starting in 2022, in order to contribute to my family's living
            expenses while searching for a full-time job in my major field, I
            took on a part-time role as an apprentice at Angry Fish Sushi, a
            sushi restaurant with a 10-year history. Having developed my cooking
            skills as a home cook, I quickly adapted and became a
            self-sufficient sushi chef. Fueled by my enthusiasm for great taste
            and flavor, I conducted extensive research and dedicated a
            substantial amount of time to refine my skills, thoroughly enjoying
            the entire process.
          </p>
        </div>
        <div className="card">
          <h1>As a Gamer</h1>
          <p>
            In China, the heavy academic pressure left me with no time to engage
            in the ninth art of electronic gaming. After coming to the United
            States, the relatively abundant free time allowed me to explore
            various types of them. I dabbled in MOBAs, FPS, RPGs, roguelikes,
            action, puzzle, cooperative, survival, rhythm games, and linear
            story games. I've written over 120 game reviews on the Steam
            platform, receiving a total of over 3000 likes and endorsements.
            During my college years, I led a team of friends as the captain in
            the intercollegiate League of Legends ARAM Tournament hosted by
            George Tech University and reached the final 16. Additionally, I was
            in charge of the localization of an independent game called "DRAW"
            made by San Jose University Game Development Club(the game is
            available for free on the Steam). I thoroughly enjoy the many
            wonderful experiences that games have brought me, including
            interactions with friends, emotionally gripping stories, tricky
            puzzles, and intense, thrilling battles.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
