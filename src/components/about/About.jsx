import React from 'react'
import "./About.css"
import Image from "next/image";
import { BsEye, BsPerson } from 'react-icons/bs'
import { LuGauge, LuMonitor, LuPenTool, LuSparkles, LuWebhook } from 'react-icons/lu'
import { BiDownload } from 'react-icons/bi'
import { MdWork, } from 'react-icons/md'
import Skills from './Skills'

const About = () => {
  return (
    <div className='about_container 
        py-8 px-4 sm:px-6 
        grid gap-6 grid-cols-1
        md:grid-cols-2 xl:grid-cols-3
        rounded-2xl'>

      <div className="about_cards 
        px-1.5  sm:px-4  sm:py-6  sm:ml-5 md:ml-0">

        <div className="w-full flex gap-4 items-center mb-6 
           text-fuchsia-400 font-semibold">
          <BsPerson className='text-4xl mr-1 text-fuchsia-400 font-semibold'/>
          <h1 className='text-3xl '>About Me</h1> 
          <LuSparkles className='text-2xl ml-1 text-fuchsia-400 font-semibold'/>
        </div>

        <p className='text-lg tracking-wider text-blue-100'>Passionate Frontend Developer focused on building clean, responsive and interactive web experiences. Always learning and exploring modern technologies. </p>
        <a  href="/shakilKhanresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          className='btn_globalStyle mb-3 mt-8'>
          View CV 
          < BsEye  className='text-3xl ml-5 text-blue-400 font-semibold'/>
        </a>
      </div>

      <div className="about_cards 
        px-1.5  sm:px-4  sm:py-6  sm:ml-5 md:ml-0">
          <Skills/>
      </div>
      
      
      <div className="about_cards 
        px-1.5  sm:px-4  sm:py-6  sm:ml-5 md:ml-0
       
        md:col-span-2 md:justify-self-center  xl:col-span-1 xl:w-auto">
        <div 
        className="w-full flex gap-4 items-center mb-6 
           text-fuchsia-400 font-semibold">
          <MdWork className='text-4xl mr-1 text-fuchsia-400 font-semibold'/>
          <h1 className='text-3xl '>What I Do</h1> 
          <LuSparkles className='text-2xl ml-1 text-fuchsia-400 font-semibold'/>
        </div>

        <div className="service">
          <LuMonitor size={18} className="icon" />
          <div>
            <h3>Frontend Development</h3>
            <p>Responsive websites and web applications</p>
          </div>
        </div>
        <div className="service">
          <LuPenTool className="icon" />
          <div>
            <h3>UI Implementation</h3>
            <p>Convert designs into code</p>
          </div>
        </div>
        <div className="service">
          <LuWebhook className="icon"/>
          <div>
            <h3>Performance Optimization</h3>
            <p>Fast and optimized user experiences</p>
          </div>
        </div>
        <div className="service">
          <LuGauge className="icon"/>
          <div>
            <h3>Frontend Development</h3>
            <p>Responsive websites and web applications</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About