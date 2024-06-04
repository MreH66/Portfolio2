import { useEffect } from "react";
import c from "./project.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function Project({ returnFun, mainObj }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos-once="true"
      data-aos="zoom-in"
      data-aos-duration="1000"
      className={c.mainDiv}
    >
      <p
        className={c.mainText}
        onClick={() => {
          returnFun(null);
        }}
      >
        <IoArrowBackCircleOutline className={c.iconPosition}/>
        {mainObj.title}
      </p>
      <img className={c.img} src={mainObj.img} />
      <p className={c.textinfo}>{mainObj.about} </p>
      <p className={c.textinfo}>
        Technologies used: {mainObj.technologiesUsed}
      </p>
    </div>
  );
}
