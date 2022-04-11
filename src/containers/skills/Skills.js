import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="dark-mode main" id="skills">
      <div className="skills-main-div">
        <div className="skills-text-div">
          <h1 className="dark-mode skills-heading">{skillsSection.title} </h1>
          <SoftwareSkill />
          <div>
            {skillsSection.skills.map((skills, i) => {
              return (
                <p key={i} className="dark-mode subTitle skills-text">
                  {skills}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
