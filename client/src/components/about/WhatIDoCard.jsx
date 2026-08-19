import React from "react";
import {
  FaBriefcase,
  FaCode,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
  FaCloudUploadAlt,
  FaArrowRight,
} from "react-icons/fa";

const ServiceItem = ({ icon: Icon, title, description }) => (
  <div className="bg-[#120a2e] hover:bg-[#190d40] border border-[#23174d] p-2 sm:p-4 rounded-xl flex items-center justify-between gap-4 transition duration-200 group">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-[#1f114d] flex items-center justify-center text-purple-400 border border-purple-900/30 flex-shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="font-semibold text-md sm:text-lg text-gray-100">{title}</h3>
        <p className="text-sm sm:text-md text-gray-400 mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
    {/* <FaArrowRight className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition duration-200 flex-shrink-0" size={14} /> */}
  </div>
);

export default function WhatIDoCard() {
  const services = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "Building responsive, interactive and user-friendly interfaces.",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Creating RESTful APIs, business logic and secure server-side applications.",
    },
    {
      icon: FaDatabase,
      title: "Database Management",
      description: "Designing scalable databases and writing efficient queries.",
    },
    {
      icon: FaShieldAlt,
      title: "Authentication",
      description: "Implementing secure authentication using JWT, bcrypt and more.",
    },
   
    {
      icon: FaCloudUploadAlt,
      title: "Deployment",
      description: "Deploying applications on modern platforms like Vercel, Render, Railway.",
    },
  ];

  return (
    // <div className="bg-[#0b071e] text-white p-6 rounded-2xl border border-[#1f1640] shadow-xl flex flex-col justify-between h-full">
    //   <div>
    <div className="bg-[#0b071e] text-white p-2 sm:p-6 md:px-10 lg:px-6 rounded-2xl border border-[#1f1640] shadow-xl flex flex-col justify-between h-full max-w-full md:max-w-none">
      <div className="w-full max-w-2xl md:max-w-3xl">  

         <div className="flex gap-4 items-center">
             <div className="w-12 h-12 ml-2 rounded-xl bg-   [#1d1145] flex items-center justify-center text-purple-400 mb-4 border border-purple-900/30">
                  <FaBriefcase size={24} />
              </div>
              <h2 className="text-2xl sm:3xl font-bold mb-2">What I Do</h2>
          </div>       
        

        {/* Services List */}
        <div className="space-y-3.5 mb-6">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Call to Action Box */}
      <div className=" md:max-w-3xl bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-purple-700/50 p-4 rounded-xl flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-purple-600/30 flex items-center justify-center text-purple-300 flex-shrink-0">
          <FaCode size={18} />
        </div>
        <div >
          <h4 className="text-md sm:text-lg font-bold text-white">Let's build something amazing</h4>
          <p className="text-sm sm:text-md text-purple-200 mt-0.5">
            I'm always open to new opportunities and exciting projects.
          </p>
        </div>
      </div>
    </div>
  );
}