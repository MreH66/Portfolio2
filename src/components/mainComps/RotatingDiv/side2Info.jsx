import c from "./side2Info.module.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";

import retrunPic from "../../../assets/go-back-arrow.png";
import cv from "../../../assets/CV2.docx";

export default function Side2({ funRotate, side }) {
  return (
    <>
      <div className={c.gridLinks + " " + c.twoDivs + " " + side}>
        <a className={c.up1} target="_blank" href={"https://github.com/MreH66"}>
          <div className={c.colorDiv + " " + c.up1}>
            <FaGithub className={c.icon} />
          </div>
        </a>

        <div className={c.colorDiv + " " + c.up2}>
          <a href={cv} download={cv}>
            <GrDocumentText className={c.icon2} />
          </a>
        </div>

        <a
          className={c.down1}
          target="_blank"
          href="https://www.linkedin.com/in/marko-gvozdenov-0a74012a1/"
        >
          <div className={c.colorDiv + " " + c.down1}>
            <FaLinkedin className={c.icon3} />
          </div>
        </a>

        <div onClick={funRotate} className={c.colorDiv + " " + c.down2}>
          <img className={c.icon4} src={retrunPic} />
        </div>
      </div>
    </>
  );
}
