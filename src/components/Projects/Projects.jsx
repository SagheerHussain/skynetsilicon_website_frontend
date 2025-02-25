import React from "react";
import { ProjectCard } from "../index";
import { work } from "../projects";
import "./projects.css";
import { Link, useLocation } from "react-router-dom";
import FilterProjects from "./FilterProjects";

const Projects = ({ isClick }) => {
  return (
    <>
      <section
        id="featured_projects"
        className={`bg-[#260C6E] pt-[170px] md:pt-[240px] pb-[100px] overflow-hidden relative ${
          isClick ? "max-h-screen" : "min-h-full"
        }`}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl text-white font-bold uppercase mb-10">Projects</h1>
          <FilterProjects isClick={isClick} />
        </div>
      </section>
    </>
  );
};

export default Projects;
