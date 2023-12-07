import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { styles } from "../styles";

const Skills = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="pt-0">
          <p className={`${styles.sectionSubText} text-center`}>From Passion to Proficiency</p>
          <h2
            className={`${styles.sectionHeadText} text-center`}
          >
            My Skills.
          </h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-12 pt-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <div className="text-center text-gray-400">
                <p className={` ${technology.color}`}>{technology.name}</p>
                <img
                  src={technology.icon}
                  alt="tech_icon"
                  className="pt-2 pl-4 pr-4"
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
