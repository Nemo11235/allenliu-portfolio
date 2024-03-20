import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import "./ThankPage.scss";
import cat1 from "./img/blackie.jpg";
import cat2 from "./img/blackie2.jpg";
import cat3 from "./img/pusheen.jpg";
import cat4 from "./img/pusheen2.jpg";
import cat5 from "./img/both.jpg";
import { ImgSlider } from "./ImgSlider";

const IMAGES = [cat1, cat2, cat3, cat4, cat5];

function ThankPage() {
  return (
    <div className="thankpage-root">
      <NavBar />
      <div className="thankpage-slider-div">
        <ImgSlider imgUrls={IMAGES} />
      </div>
    </div>
  );
}

export default ThankPage;
