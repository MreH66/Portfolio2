import { useEffect, useState } from "react";
import c from "./mainInfo.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { aboutMe, skillsArray } from "../../../hardcoded-values/allValues";
import { v4 } from "uuid";
import Project from "./projectComp/project";

import { myWork } from "../../../hardcoded-values/allValues";

import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function TypeOfText({ type }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={c.mainInfo}>
      {type === "about" && (
        <div
          key={v4()}
          data-aos-once="true"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <p className={c.textAbout}>{aboutMe}</p>
        </div>
      )}

      {type === "skills" && (
        <div
          className={c.mainDivScroll}
          data-aos-once="true"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {skillsArray.map(({ title, skillsList }) => (
            <div key={v4()}>
              <h2 className={c.title}>{title}</h2>
              <div>
                {skillsList.map((item) => (
                  <div className={c.styleDivSkills} key={v4()}>
                    <p className={c.textSkill}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {type === "work" && (
        <>
          {selectedProject === null && (
            <div
              data-aos-once="true"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <h2 className={c.textProject}>Projects</h2>
              <div className={c.projectsDiv}>
                {myWork.map((item) => {
                  return (
                    <div
                      className={c.hoverAnimation}
                      onClick={() => {
                        setSelectedProject(item);
                      }}
                      key={v4()}
                    >
                      <p className={c.textTitle}>
                        <MdOutlineArrowForwardIos className={c.iconPosition} />
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {selectedProject && (
            <>
              <Project
                returnFun={setSelectedProject}
                mainObj={selectedProject}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
