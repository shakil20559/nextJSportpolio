"use client";

import { TypeAnimation } from 'react-type-animation';

function TypeWriter() {
  return (
    <div className="space-y-3">
      <TypeAnimation
        sequence={[
          "MERN Full-Stack Web Developer",
          2000,
          "Front-End & Back-End Specialist",
          2000,
          "Database & API Developer",
          2000,
          "Modern Web Application Builder",
          2000,
        ]}
        speed={50}
        repeat={Infinity}
        className="type_animation text-xl font-semibold tracking-wide text-fuchsia-400 min-[420px]:text-2xl sm:text-3xl lg:text-4xl"
      />

    </div>
  );
}

export default TypeWriter;