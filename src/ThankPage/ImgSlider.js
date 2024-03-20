import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react";
import "./ImgSlider.scss";

type ImgSliderProps = {
  imgUrls: string[],
};

export function ImgSlider({ imgUrls }: ImgSliderProps) {
  function showPrevImg() {
    setImgIndex((index) => {
      if (index === 0) return imgUrls.length - 1;
      return index - 1;
    });
  }

  function showNextImg() {
    setImgIndex((index) => {
      if (index === imgUrls.length - 1) return 0;
      return index + 1;
    });
  }
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div className="slider-root">
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {imgUrls.map((url) => (
          <img
            key={url}
            src={url}
            className="slider-img"
            alt="cat img"
            style={{ translate: `${-100 * imgIndex}%` }}
          />
        ))}
      </div>
      <button className="slider-btn" style={{ left: 0 }} onClick={showPrevImg}>
        <ArrowBigLeft />
      </button>
      <button className="slider-btn" style={{ right: 0 }} onClick={showNextImg}>
        <ArrowBigRight style={{ right: 0 }} />
      </button>
      <div className="dot-div">
        {imgUrls.map((_, index) => (
          <button className="slider-dot-btn" onClick={() => setImgIndex(index)}>
            {index === imgIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
}
