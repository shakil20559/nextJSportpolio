import Image from "next/image";
import weatherApp from '../../../public/weatherAppTamplate.jpg' 

export default function WeatherAppProject() {
  return (
    <div className="max-w-md group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
      
      {/* Project Image */}
        <div className="relative w-full overflow-hidden bg-gray-800/50">
        <Image
          src={weatherApp}
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
          Weather Application
        </span>

        <h3 className="mb-3 text-xl text-fuchsia-400 font-semibold tracking-wider">
          Live Weather Dashboard
        </h3>

        <p className="mb-5 text-sm sm:text-base text-gray-300 leading-relaxed">
            A real-time weather app with live conditions, 7-day forecasts, location tracking, temperature unit conversion, and dynamic backgrounds that change with the weather.
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
            Weather API
          </span>

          <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-fuchsia-300">
            Axios
          </span>
        </div>

        {/* Buttons */}
       <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
         <a
            href="https://weather-app-livid-theta-56.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 text-center text-sm sm:text-base rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 sm:px-6 sm:py-2.5 font-medium text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-[0.98]"
        > Live Demo 
        </a>

        <a
            href="https://github.com/yourusername/weather-app.git"
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