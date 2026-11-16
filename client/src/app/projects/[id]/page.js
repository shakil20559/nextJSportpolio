import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiLayers,
  FiFolder,
  FiCheckCircle,
} from "react-icons/fi";
import { projectData } from "@/features/projects/projectData";
import RelatedProjects from "@/features/projects/RelatedProjects";

const ProjectDetailsPage = async ({ params }) => {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  const project = projectData.find(
    (item) => String(item.id) === String(id)
  );

  if (!project) {
    notFound();
  }

  const {
    category,
    subCategory,
    title,
    description,
    image,
    techStack = [],
    liveUrl,
  } = project;

  const relatedProjects = projectData
    .filter(
      (item) =>
        item.category === category && String(item.id) !== String(id)
    )
    .slice(0, 3);

  return (
    <section className="min-h-screen w-full bg-[#0c0121] text-blue-50 py-10 sm:py-14 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Back Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-200/70 hover:text-purple-300 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-purple-400" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Main Glassmorphic Container (Side-by-Side on md & larger screens) */}
        <div className="rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-md border border-purple-500/20 shadow-2xl shadow-black/50 p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Side: Project Image (6 columns on md+) */}
            <div className="md:col-span-6 md:sticky md:top-8">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#1b0444] border border-purple-500/25 shadow-xl shadow-black/40">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12032e]/50 via-transparent to-transparent" />
              </div>

              {/* Project Metadata Strip below image on md+ */}
              <div className="mt-5 grid grid-cols-3 gap-3 rounded-2xl bg-[#15013a]/60 border border-purple-500/15 p-4">
                <div className="flex items-start gap-2.5">
                  <FiFolder className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-blue-200/50 uppercase">Category</p>
                    <p className="text-xs sm:text-sm font-medium text-blue-50 truncate">
                      {category}
                    </p>
                  </div>
                </div>

                {subCategory && (
                  <div className="flex items-start gap-2.5">
                    <FiLayers className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] text-blue-200/50 uppercase">Type</p>
                      <p className="text-xs sm:text-sm font-medium text-blue-50 truncate">
                        {subCategory}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-2.5">
                  <FiCheckCircle className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-blue-200/50 uppercase">Status</p>
                    <p className="text-xs sm:text-sm font-medium text-emerald-400 truncate">
                      Live
                    </p>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-1.5">
                  <span className="text-purple-400">{category}</span>
                  {subCategory && (
                    <>
                      <span className="text-purple-500/50">•</span>
                      <span className="text-blue-200/60">{subCategory}</span>
                    </>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl  font-semibold text-blue-50 tracking-tight leading-snug">
                  {title}
                </h1>
              </div>

              {/* Description */}
              <div className="pt-4 border-t border-purple-500/15">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2.5">
                  Project Overview
                </h2>
                <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Tech Stack */}
              {techStack.length > 0 && (
                <div className="pt-2">
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-3">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs sm:text-sm text-blue-100/85 bg-purple-500/10 border border-purple-400/20 px-3.5 py-1.5 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Live Preview Button */}
              <div className="pt-4 border-t border-purple-500/15">
                {liveUrl ? (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/30 shadow-lg shadow-purple-900/40 transition-all duration-300"
                  >
                    <span>Live Preview</span>
                    <FiArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-px-4 py-1.5 rounded-2xl  text-xs font-medium text-blue-100/40 bg-white/[0.04] border border-white/10">
                    Preview Unavailable
                  </span>
                )}
              </div>

            </div>
          </div>
        </div>

        <RelatedProjects projects={relatedProjects} category={category} />

      </div>
    </section>
  );
};

export default ProjectDetailsPage;