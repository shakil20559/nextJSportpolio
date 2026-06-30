import Image from "next/image";
import habibaTemplate from '../../../public/ummeHabiba.png'
export default function HabibaPortpolio() {
  return (
    <div className="max-w-md group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
      
      {/* Project Image */}
         <div className="relative w-full overflow-hidden bg-gray-800/50">
        <Image
          src={habibaTemplate}
          alt="Weather App Dashboard"
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          style={{
            height: 'auto',
            maxHeight: '280px',
            minHeight: '200px',
          }}
          priority
          quality={85}
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

        <p className="mb-5 text-sm text-gray-300">
          A modern portfolio website designed and developed for a graphic designer. Features project showcases, responsive design, smooth animations, and a professional contact section.
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

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                 <a
                    href="https://ummehabiba-alpha.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 text-center text-sm sm:text-base rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 sm:px-6 sm:py-2.5 font-medium text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                > Live Demo
                </a>
        
                <a
                    href="https://github.com/shakil20559/ummehabiba.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 flex justify-center items-center gap-2 rounded-2xl border border-fuchsia-400/30 px-4 py-2.5 sm:px-6 sm:py-2.5 text-sm sm:text-base font-medium text-fuchsia-300 transition-all duration-300 hover:bg-fuchsia-500/10 hover:border-fuchsia-400 hover:scale-[1.02] active:scale-[0.98]"
                >
                  
                    GitHub
                </a>
                </div>
      </div>
    </div>
  );
}