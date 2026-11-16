import React from 'react';
import { LuSparkles } from 'react-icons/lu';
import { projectData } from '@/features/projects/projectData';
import ProjectGrid from '@/features/projects/ProjectGrid';

const ProjectPage = () => {
  return (
    <div className="bg-[#090613] px-4 py-8">
      <div className="flex items-center justify-between mb-12 px-4 sm:px-6 lg:px-8 xl:px-10 w-full h-20 bg-gray-800/80 rounded-xl">
        <span className="text-3xl text-blue-500/80 hidden sm:block">{'</>'}</span>

        <div className="project_headerTitle flex items-center justify-center mx-auto sm:mx-0 gap-3 sm:gap-6 xl:gap-10 text-blue-100 whitespace-nowrap font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          <LuSparkles className="text-fuchsia-400" />
          <h2 className="tracking-wider">
            IDEAS TURN INTO
            <span className="text-fuchsia-400"> CODE</span>
          </h2>
          <LuSparkles className="text-fuchsia-400" />
        </div>

        <span className="text-3xl text-blue-500/80 hidden sm:block">{'</>'}</span>
      </div>

      <div className="max-w-7xl mx-auto">
        <ProjectGrid projects={projectData} />
      </div>
    </div>
  );
};

export default ProjectPage;