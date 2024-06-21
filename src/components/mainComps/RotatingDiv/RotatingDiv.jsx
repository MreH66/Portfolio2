import { useEffect, useState } from "react";
import c from "./animation.module.css";

import mainPic from "../../../assets/mainImage.jpg";
import Side2 from "./side2Info";

import AOS from "aos";
import "aos/dist/aos.css";

export default function RotatingDiv() {
  let runOnce = true;

  useEffect(() => {
    AOS.init();
  }, []);

  const [fadeReady, setFadeReady] = useState(null);

  const [animation, setAnimation] = useState(true);
  const [addAnimation, setAddAnimetion] = useState(null);
  const [animation3, setAnimatin3] = useState(null);

  function timeFun(nameDiv) {
    setTimeout(() => {
      setAddAnimetion(nameDiv);
      setAnimatin3(c.slideInSecond2);
      setAnimation(!animation);
    }, 1200);
  }

  function chnageDiv() {
    runOnce = false;
    if (animation) {
      setAddAnimetion(c.slideIn);
      setAnimatin3(c.slideIn2);

      timeFun(c.slideInSecond);
    } else {
      setAddAnimetion(c.slideInSe);
      setAnimatin3(c.slideInSe2);

      timeFun(c.slideInSecondSe);
    }

    setFadeReady(c.opacityManage);

    setTimeout(() => {
      setFadeReady(null);
    }, 1200);
  }

  useEffect(() => {
    function rotateOnce() {
      setTimeout(() => {
        if (runOnce) {
          chnageDiv();
        }
      }, 5000);
    }
    rotateOnce();
  }, []);

  return (
    <div>
      <div className={c.styleDiv}></div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className={c.postitionOfCircle}
      >
        <div className={c.rotationDiv}></div>

        <div
          onClick={chnageDiv}
          className={
            animation ? c.positionDivA + " " + addAnimation : c.hideDiv
          }
        ></div>
        <div
          onClick={chnageDiv}
          className={animation ? c.positionDivA2 + " " + animation3 : c.hideDiv}
        >
          <img className={c.picture + " " + fadeReady} src={mainPic} />
        </div>
        <div
          className={
            animation
              ? c.hideDiv
              : c.positionDivA + " " + c.positionDivAZ + " " + addAnimation
          }
        >
          <Side2 funRotate={chnageDiv} side={fadeReady} />
        </div>
        <div
          className={
            animation
              ? c.hideDiv
              : c.positionDivA2 + " " + c.positionDivAZ2 + " " + animation3
          }
        ></div>
      </div>
    </div>
  );
}
