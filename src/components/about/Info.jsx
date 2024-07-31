import React from "react";
import {
  HiOutlineDesktopComputer,
  HiOutlineSparkles,
  HiOutlineTerminal,
} from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <HiOutlineDesktopComputer className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Years</span>
      </div>
      <div className="about__box">
        <HiOutlineTerminal className="about__icon" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ Projects</span>
      </div>
      <div className="about__box">
        <HiOutlineSparkles className="about__icon" />
        <h3 className="about__title">Availability</h3>
        <span className="about__subtitle">Active</span>
      </div>
    </div>
  );
};

export default Info;
