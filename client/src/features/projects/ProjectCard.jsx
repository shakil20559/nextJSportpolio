import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiEye } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const {
    id,
    category,
    subCategory,
    title,
    image,
    techStack = [],
    liveUrl,
  } = project;

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-white/[0.03] hover:bg-white/[0.05] backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50 shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-1 transition-all duration-300">
      {/* Top Subtle Highlight Line on Hover */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      <div>
        {/* Image Section */}
        <Link
          href={`/projects/${id}`}
          className="relative block aspect-video w-full overflow-hidden bg-[#1b0444]"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Subtle Bottom Vignette to blend image with card */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#12032e]/80 via-transparent to-transparent opacity-60" />

          {/* Hover Overlay (Desktop) */}
          <div className="absolute inset-0 bg-[#15013a]/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <span className="text-blue-50 text-xs sm:text-sm font-medium border border-purple-400/50 bg-purple-950/80 px-2 py-1 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span>View Details</span>
            </span>
          </div>
        </Link>

        {/* Content Section */}
        <div className="p-2 pt-3">
          {/* Category & SubCategory */}
          <div className="flex items-center justify-between gap-2 text-[11px] font-medium tracking-wide uppercase mb-2">
            <span className="text-purple-3d00 truncate">{category}</span>
            {subCategory && (
              <span className="text-blue-100/60 truncate text-right">
                {subCategory}
              </span>
            )}
          </div>

          {/* Title */}
          <Link href={`/projects/${id}`}>
            <h3 className="text-md font-semibold text-blue-50 group-hover:text-purple-300 transition-colors line-clamp-1 mb-2">
              {title}
            </h3>
          </Link>

          {/* Clean Minimal Tech Stack Pills */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              {techStack.slice(0, 5).map((tech, index) => (
                <span key={index} className="text-xs text-blue-100/75 px-1 ">
                  {tech}
                </span>
              ))}
              {techStack.length > 5 && (
                <span className="text-xs text-blue-100/75 px-1">
                  +{techStack.length - 5}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="px-5 py-2 border-t border-purple-500/15 bg-black/20 flex items-center justify-between gap-2">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1 text-xs font-medium text-blue-100/80 hover:text-purple-300 transition-colors"
          >
            <span>Live Preview</span>
            <FiArrowUpRight className="w-4 h-4 text-purple-400 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        ) : (
          <span className="text-xs text-blue-100/35 italic">
            Preview Unavailable
          </span>
        )}

        {/* Mobile Details Link */}
        <Link
          href={`/projects/${id}`}
          className="sm:hidden inline-flex items-center gap-1.5 text-xs font-medium text-purple-300 hover:text-purple-200"
        >
          <span>Details</span>
          <FiEye className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
