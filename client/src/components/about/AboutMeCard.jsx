import WhatsappButton from "@/hooks/WhatsappButton";
import React from "react";
import Image from "next/image";
import { BsEye } from 'react-icons/bs'

import { BiPhone } from "react-icons/bi";
import {
  FaUser, FaCalendarAlt, FaMapMarkerAlt, FaEnvelope, FaDownload,
} from "react-icons/fa";

export default function AboutMeCard() {
  return (
    
  <div className="bg-[#0b071e] text-white 
  px-3 sm:px-6 md:px-10 lg:px-4 py-8 
  rounded-2xl border border-[#1f1640] shadow-xl flex flex-col justify-between h-full max-w-full md:max-w-none">
    <div className="w-full max-w-2xl md:max-w-3xl">
      <div>
        {/* Header Icon & Title */}
        <div className="flex gap-4 items-center ml-2">
          <div className="w-12 h-12 rounded-xl bg-[#1d1145] flex items-center justify-center text-purple-400 mb-4 border border-purple-900/30">
            <FaUser size={24} />
          </div>
          <h2 className="text-2xl sm:3xl font-bold mb-2 ">About Me</h2>
        </div>
        

        {/* Bio */}
        <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-6 ml-1 sm:ml-3">
          I'm a passionate{" "}
          <span className="text-purple-400 font-semibold">
            Full Stack Developer
          </span>{" "}
          who loves building modern, fast and scalable web applications.
          <br />
          <br />
          I enjoy turning ideas into real products that solve problems and
          create impact.
        </p>

        {/* Info Grid */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#140b33] flex items-center justify-center text-purple-400 border border-purple-900/20">
              <FaCalendarAlt size={22} />
            </div>
            <div>
              <p className="text-base text-gray-400 ">Experience</p>
              <p className="text-lg  font-medium">1+ Years</p>
            </div>
          </div>

          <div className="flex items-center gap-3 ">
            <div className="w-12 h-12 rounded-lg bg-[#140b33] flex items-center justify-center text-purple-400 border border-purple-900/20">
              <FaMapMarkerAlt size={22} />
            </div>
            <div>
              <p className="text-base   text-gray-400">Location</p>
              <p className="text-lg  font-medium ">Bangladesh</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#140b33] flex items-center justify-center text-purple-400 border border-purple-900/20">
              <FaEnvelope size={16} />
            </div>
            <div>
              <p className="text-base text-gray-400">Email</p>
              <p className="text-lg font-medium">shakilkhan97135@gmail.com</p>
            </div>
          </div>


          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#140b33] flex items-center justify-center text-purple-400 border border-purple-900/20">
              <BiPhone size={16} />
            </div>
            <div>
              <p className="text-base text-gray-400">Phone</p>
              <p className="text-lg font-medium"> +218 9316-40416</p>
            </div>
          </div>

        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-3 ">
        <WhatsappButton className='w-full'/>  


        <a
          href="/shakilKhanresume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center items-center gap-1.5 
           rounded-full border border-fuchsia-400/30 px-3 py-1.5 mt-4
            text-lg  font-medium text-fuchsia-200 transition-all duration-300 hover:bg-fuchsia-500/10 hover:border-fuchsia-400 hover:scale-[1.02] active:scale-[0.98]"
        > View CV 
          < BsEye  className=' text-2xl ml-2 text-blue-400 font-semibold'/>
        </a>
        

      </div>
    </div>
    </div>
  );
}