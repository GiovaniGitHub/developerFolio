import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Profile from "./profile/Profile";
import Education from "./education/Education";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(true);
  };

  return (
    <div className="dark-mode">
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <>
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <Achievement />
          <WorkExperience />
          <StartupProject />
          <Profile />
          <Footer />
        </>
      </StyleProvider>
    </div>
  );
};

export default Main;
