import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {
  workExperiences,
  skillsSection,
  educationInfo,

  achievementSection
} from "../../portfolio";

function Header() {
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewEducationInfo = educationInfo.display;
  const viewAchievement = achievementSection.display;


  return (
    <Headroom>
      <header className="dark-menu header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className="navicon navicon-dark"></span>
        </label>
        <ul className="dark-menu menu">
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {
            viewEducationInfo && (
              <li>
                <a href="#education">Education</a>
              </li>
            )
          }
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

          {/* {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )} */}
          {/* {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )} */}
          {/* {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )} */}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          {/* <li> */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          {/* <a>
              <ToggleSwitch />
            </a> */}
          {/* </li> */}
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
