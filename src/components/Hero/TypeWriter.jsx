"use client"
import { TypeAnimation } from 'react-type-animation';

function TypeWriter() {
  return (
  <div className="space-y-3">
    <TypeAnimation
      sequence={[
       "Frontend Developer",
        2000,
        "React.js Developer",
        2000,
        "Next.js Developer",
        2000,
        "UI/UX Enthusiast",
        2000,
      ]}
      speed={50}
      repeat={Infinity}
      className="type_animation text-fuchsia-400 
      text-2xl sm:text-3xl lg:text-4xl "
    />

  <p className="my-2 text-gray-300 text-lg flex flex-wrap md:text-lg max-w-xl">
    Building Fast & Responsive Web Experiences
  </p>
</div>
  );
}

export default TypeWriter;
