import React from "react";
import AboutMeCard from "./AboutMeCard";
import MySkillsCard from "./MySkillsCard";
import WhatIDoCard from "./WhatIDoCard";

export default function About() {
  return (
    <div className="min-h-screen bg-[#050212] mt-6
     py-12 px-4 sm:px-6 lg:px-8">
      <div className="  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-stretch mb-6">
        <AboutMeCard />
        <WhatIDoCard />
      </div>
      <div className=" mx-auto gap-6 items-stretch">
        <MySkillsCard />
      </div>
      
    </div>
  );
}