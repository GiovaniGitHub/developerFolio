import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";

import {
  workExperiences,
  skillsSection,
  educationInfo,
  bigProjects,
  achievementSection
} from "../../portfolio";

function Header() {
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewEducationInfo = educationInfo.display;
  const viewAchievement = achievementSection.display;
  const viewBigProjects = bigProjects.display;

  return (
    <Headroom>
      <header className="dark-menu header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className="navicon navicon-dark"></span>
        </label>
        <ul className="dark-menu menu">
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewEducationInfo && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Certifications</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewBigProjects && (
            <li>
              <a href="#projects">Helped Projects</a>
            </li>
          )}

          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
