import React from "react";
import {
  FaCode, FaHtml5, FaCss3Alt, FaJs, FaReact,FaNodeJs, FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbApi, TbLock } from "react-icons/tb";

const SkillCategory = ({ title, icon: Icon, skills }) => (
  <div className="bg-[#120a2e] p-5 rounded-xl border border-[#23174d] h-full flex flex-col justify-between">
    <div>
      <div className="flex items-center gap-2 mb-5 text-purple-400 font-semibold border-b border-[#23174d] pb-3">
        <Icon size={18} />
        <span className="text-sm tracking-wide">{title}</span>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 w-32 shrink-0">
              <skill.icon className={`${skill.color || "text-purple-400"} text-lg shrink-0`} />
              <span className="text-xs font-medium text-gray-200 truncate">{skill.name}</span>
            </div>
            <div className="flex-1 bg-[#150d38] rounded-full h-2 overflow-hidden border border-[#25165c]">
              <div
                className="bg-gradient-to-r from-purple-600 to-pink-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="text-xs font-semibold text-gray-300 w-8 text-right shrink-0">
              {skill.level}%
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function MySkillsCard() {
  const frontendSkills = [
    { name: "HTML5", level: 95, icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", level: 95, icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", level: 85, icon: FaJs, color: "text-yellow-400" },
    { name: "React.js", level: 90, icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", level: 87, icon: SiNextdotjs, color: "text-white" },
    { name: "Tailwind CSS", level: 97, icon: SiTailwindcss, color: "text-sky-400" },
  ];

  const backendSkills = [
    { name: "Node.js", level: 90, icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", level: 80, icon: SiExpress, color: "text-gray-300" },
    { name: "MongoDB", level: 80, icon: SiMongodb, color: "text-emerald-500" },
    { name: "RESTful API", level: 80, icon: TbApi, color: "text-blue-400" },
    { name: "Authentication (JWT)", level: 80, icon: TbLock, color: "text-purple-400" },
  ];

  const toolSkills = [
    { name: "Git & GitHub", level: 90, icon: FaGitAlt, color: "text-orange-600" },
    { name: "Postman", level: 85, icon: SiPostman, color: "text-orange-500" },
    { name: "VS Code", level: 95, icon: VscCode, color: "text-blue-500" },
    // { name: "Docker", level: 75, icon: FaDocker, color: "text-blue-400" },
  ];

  return (
    <div className="bg-[#0b071e] text-white p-6 rounded-2xl border border-[#1f1640] shadow-xl">
      {/* Header Icon & Title */}
      <div className="flex gap-4 items-center -ml-1">
                <div className="w-12 h-12 rounded-xl bg-[#1d1145] flex items-center justify-center text-purple-400 mb-4 border border-purple-900/30">
                  <FaCode size={24} />
                </div>
                <h2 className="text-2xl sm:3xl font-bold mb-2">My Skills</h2>
              </div>


      {/* Grid Layout for Categories */}
      {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-md md:max-w-none mx-auto">
        <SkillCategory title="Frontend Development" icon={FaCode} skills={frontendSkills} />
        <SkillCategory title="Backend Development" icon={FaNodeJs} skills={backendSkills} />
        <SkillCategory title="Tools & Others" icon={FaGitAlt} skills={toolSkills} />
      </div>
    </div>
  );
}