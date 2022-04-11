import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <h2 className="subTitle">Languages</h2>
      <ul className="dev-icons">
        {skillsSection.softwareSkills.languages.map((skills, i) => {
          if (skills.negative) {
            return (
              <li
                key={i}
                className="software-skill-inline img-negative"
                name={skills.skillName}
              >
                <img
                  alt={skills.skillName}
                  width={skills.size}
                  src={skills.imageUrl}
                />
                <p>{skills.skillName}</p>
              </li>
            );
          } else {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <img
                  alt={skills.skillName}
                  width={skills.size}
                  src={skills.imageUrl}
                />
                <p>{skills.skillName}</p>
              </li>
            );
          }
        })}
      </ul>
      <h2 className="subTitle">Tools</h2>
      <ul className="dev-icons">
        {skillsSection.softwareSkills.tools.map((skills, i) => {
          if (skills.negative) {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <img
                  alt={skills.skillName}
                  width={skills.size}
                  className="img-negative"
                  src={skills.imageUrl}
                />
                <p>{skills.skillName}</p>
              </li>
            );
          } else {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <img
                  alt={skills.skillName}
                  width={skills.size}
                  src={skills.imageUrl}
                />
                <p>{skills.skillName}</p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
