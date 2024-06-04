import { useState } from "react";
import c from "./mainComp.module.css";

import MainInfo from "./infoComp/mainInfo";

export default function MainComp() {
  const [infoType, setInfoType] = useState(undefined);

  function setInfo(type) {
    if (infoType === type) {
      setInfoType(undefined);
      return;
    }

    setInfoType(type);
  }

  return (
    <>
      <div>
        <div className={c.linksAndIcons}>
          <div
            onClick={() => {
              setInfo("about");
            }}
            className={c.divChangeText}
          >
            <p className={c.textShadow}>About me</p>
          </div>
          <div
            onClick={() => {
              setInfo("skills");
            }}
            className={c.divChangeText}
          >
            <p className={c.textShadow}>Skills</p>
          </div>
          <div
            onClick={() => {
              setInfo("work");
            }}
            className={c.divChangeText}
          >
            <p className={c.textShadow}>My work</p>
          </div>
        </div>
        <div className={c.mainInfo}>
          <MainInfo type={infoType} />
        </div>
      </div>
    </>
  );
}
