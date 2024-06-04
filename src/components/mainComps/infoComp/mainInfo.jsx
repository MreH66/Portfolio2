import { useEffect } from "react";

import c from "./mainInfo.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import TypeOfText from "./typeOfText";

export default function MainInfo({ type }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {!type && (
        <h2
          data-aos-once="true"
          data-aos="zoom-in"
          data-aos-duration="1000"
          className={c.mainText}
        >
          Welcome to my portfolio
        </h2>
      )}
      <div className={c.mainDiv}>
        <TypeOfText type={type} />
      </div>
    </>
  );
}
