import React from "react";
import Picture from "/profileImg.png";
import Image from "next/image";

export default function HeroProfile() {
  return (
    <div className=" relative flex items-center justify-center 
    w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] 
    lg:w-[500px] lg:h-[500px] mx-auto">
      
      {/* Animated Ring */}
      <div className="absolute w-[90%] h-[90%] rounded-full 
      bg-gradient-to-r from-purple-800 via-cyan-800 to-pink-800
       animate-spin-slow blur-sm opacity-80"></div>

      {/* Glass Circle */}
      <div className="absolute w-[90%] h-[90%] 
      rounded-full backdrop-blur-xl bg-white/10 
      border border-white/20"></div>

      {/* Profile Image */}
      <div className="relative group">
        <Image
          src={Picture}
          alt="Profile"
          className="
            w-[220px] h-[220px]
            sm:w-[280px] sm:h-[280px]
            md:w-[350px] md:h-[350px]
            lg:w-[400px] lg:h-[400px]
            rounded-full object-cover
            border-4 border-white/30
            shadow-2xl
            transition-all duration-500
            group-hover:scale-105
          "
        />

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>

      {/* Floating Dots */}
      <div className="absolute top-2 left-6 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full animate-bounce"></div>

      <div className="absolute bottom-2 right-0 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-pulse"></div>

      <div className="absolute top-8 right-0 sm:-right-6 w-4 h-4 sm:w-5 sm:h-5 bg-purple-400 rounded-full animate-ping"></div>
    </div>
  );
}