import React from "react";
import ProjectCard from "./ProjectCard";

const RelatedProjects = ({ projects = [], category }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="mt-16 pt-10 border-t border-purple-500/15">
      <h2 className="text-lg sm:text-xl font-semibold text-blue-50 mb-6">
        More in <span className="text-purple-400">{category}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;