import { useEffect } from "react";
import c from "./project.module.css";

import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoReturnUpBackOutline } from "react-icons/io5";

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
      <div className={c.gridButtons}>
        <div>
          <IoReturnUpBackOutline
            onClick={() => {
              returnFun(null);
            }}
            className={c.iconBack}
          />
        </div>

        <p className={c.mainText}>
          <Link className={c.mainLink} to={mainObj.link} target="_blank">
            {mainObj.title}
            <IoArrowBackCircleOutline className={c.iconPosition} />
          </Link>
        </p>
      </div>
      <img className={c.img} src={mainObj.img} />
      <p className={c.textinfo}>{mainObj.about} </p>
      <p className={c.textinfo}>
        Technologies used: {mainObj.technologiesUsed}
      </p>
    </div>
  );
}
