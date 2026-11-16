// src/features/projects/ProjectGrid.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects = [], limit }) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
      {displayedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;