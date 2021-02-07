import React from "react";
import Navigation from "../components/Navigation";
import BtnsBot from "../components/BtnsBot";
import Logo from "../components/Logo";

import Project from "../components/Project";

export const Project1 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <BtnsBot left={"/"} right={"/project-2"} />
      </div>
    </main>
  );
};

export const Project2 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <BtnsBot left={"/project-1"} right={"/project-3"} />
      </div>
    </main>
  );
};

export const Project3 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Logo /> <Project projectNumber={2} />
        <BtnsBot left={"/project-2"} right={"/project-4"} />
      </div>
    </main>
  );
};

export const Project4 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />

        <BtnsBot left={"/project-3"} right={"/contact"} />
      </div>
    </main>
  );
};
