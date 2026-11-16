import React from 'react';
import Link from 'next/link';
import { LuArrowRight, LuSparkles } from 'react-icons/lu';
import { projectData } from '@/features/projects/projectData';
import ProjectGrid from '@/features/projects/ProjectGrid';

const HomeProjectsSection = () => {
  const selectedProjects = projectData.filter((project) => project.featured);

  return (
    <section className="bg-[#090613]  px-4 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Banner */}
        <div className="flex items-center justify-between mb-8 px-4 sm:px-6 lg:px-8 xl:px-10 w-full h-20 bg-gray-800/80 rounded-xl">
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

        {/* Top Right View More Option */}
        <div className="mb-6 flex justify-end">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl 
                       bg-fuchsia-500/10 border border-fuchsia-500/40 
                       text-fuchsia-300 text-sm sm:text-base font-medium 
                       hover:bg-fuchsia-500/20 hover:text-white transition-all duration-300"
          >
            <span>View More</span>
            <LuArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Selected Projects Grid */}
        <ProjectGrid projects={selectedProjects} limit={4} />

      </div>
    </section>
  );
};

export default HomeProjectsSection;