import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>
      <a href={`${item.source}`} className="project__button" target="_blank">
        Source Code <HiOutlineArrowSmRight className="project__button-icon" />
      </a>
      <a href={`${item.view}`} className="project__button" target="_blank">
        Live <HiOutlineArrowSmRight className="project__button-icon" />
      </a>
    </div>
  );
};

export default ProjectItems;
