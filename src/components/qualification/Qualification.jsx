import React, { useState } from "react";
import "./qualification.css";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCalendar,
} from "react-icons/hi";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <HiOutlineAcademicCap className="qualification__icon" />
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <HiOutlineBriefcase className="qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Management Msc.</h3>
                <span className="qualification__subtitle">
                  Czestochowa University of Technology
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2023-2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Computer Engineering</h3>
                <span className="qualification__subtitle">
                  Manisa Celal Bayar University
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2018-2022
                </div>
              </div>
            </div>
            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">UX Academy</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2021-2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">Grand Parade</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  01.2024-Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">C2B Technology</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  01.2023-01.2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Full Stack Developer Tutor
                </h3>
                <span className="qualification__subtitle">Develhope</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  03.2023-10.2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">Simetri8</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  12.2022-01.2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Full Stack Developer Intern
                </h3>
                <span className="qualification__subtitle">
                  Hamdi Küçük A.Ş.
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  03.2022-06.2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
