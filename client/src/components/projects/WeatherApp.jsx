import Image from "next/image";
import weatherApp from '../../../public/weatherAppTamplate.jpg';

export default function WeatherAppProject() {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#171126]/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40">
      
      {/* Project Image */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-800/50">
        <Image
          src={weatherApp}
          alt="Weather App Dashboard"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
          quality={85}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div>
          <span className="mb-2 inline-block rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-400">
            Weather Application
          </span>

          <h3 className="mb-2 text-lg sm:text-xl text-fuchsia-400 font-semibold tracking-wide">
            Live Weather Dashboard
          </h3>

          <p className="mb-4 text-xs sm:text-sm text-gray-300 line-clamp-3">
            A real-time weather app with live conditions, 7-day forecasts, location tracking, temperature unit conversion, and dynamic backgrounds that change with the weather.
          </p>
        </div>

        <div className="mt-auto">
          {/* Tech Stack */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-fuchsia-300">
              React.js
            </span>
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-fuchsia-300">
              Tailwind CSS
            </span>
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-fuchsia-300">
              Weather API
            </span>
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-fuchsia-300">
              Axios
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2.5">
            <a
              href="https://weather-app-livid-theta-56.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs sm:text-sm rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 font-medium text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/yourusername/weather-app.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center gap-1.5 rounded-xl border border-fuchsia-400/30 px-3 py-2 text-xs sm:text-sm font-medium text-fuchsia-300 transition-all duration-300 hover:bg-fuchsia-500/10 hover:border-fuchsia-400 hover:scale-[1.02] active:scale-[0.98]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}