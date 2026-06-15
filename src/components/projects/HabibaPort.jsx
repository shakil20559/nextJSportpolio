import Image from "next/image";
import template from '../../../public/ummeHabiba.png'
export default function HabibaPortpolio() {
  return (
    <div className="max-w-lg group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
      
      {/* Project Image */}
      <div className="overflow-hidden">
        <Image
    src={template}
    alt="Habiba Portfolio"
    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
  />
      </div>

      {/* Content */}
      <div className="py-6 px-2 sm:px-6">
        <span className="mb-3 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
          Client Project
        </span>

        <h3 className="mb-3 text-2xl text-fuchsia-400 font-semibold tracking-wider">
          Graphic Designer Portfolio
        </h3>

        <p className="mb-5 text-gray-300">
          A modern portfolio website designed and developed for a graphic
          designer. Features project showcases, responsive design, smooth
          animations, and a professional contact section.
        </p>

        {/* Tech Stack */}
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-fuchsia-300">
            React.js
          </span>

          <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-fuchsia-300">
            Tailwind CSS
          </span>

          <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-fuchsia-300">
            JavaScript
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 sm:gap-6">
          <a
            href="https://ummehabiba-alpha.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn_globalStyle w-1/2 ">
            Live Demo
          </a>

          <a
            href="https://github.com/shakil20559/ummehabiba.git"
            target="_blank"
            rel="noopener noreferrer"
            className=" w-1/2 flex justify-center items-center
           rounded-2xl border border-fuchsia-300
           py-2 px-6 text-2xl tracking-wider hover:bg-gray-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}