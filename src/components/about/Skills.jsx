import React from 'react'
import "./About.css"
import { LuSparkles } from 'react-icons/lu'
import { GiSkills } from 'react-icons/gi'

const Skills = () => {
  return (
    <>
        <div className="w-full flex gap-4 items-center mb-6 
           text-fuchsia-400 font-semibold">
            <GiSkills className='text-4xl mr-1 text-fuchsia-400 font-semibold'/>
            <h1 className='text-3xl '>My Skills</h1> 
            <LuSparkles className='text-2xl ml-1 text-fuchsia-400 font-semibold'/>
        </div >

        <div className="skill_items">
            <h5>HTML5</h5>
            <div className='progress_bar'>
                <p>95%</p>
                <div className='progress w-[95%]'></div>
            </div>
        </div>
        <div className="skill_items">
            <h5>CSS3</h5>
            <div className='progress_bar'>
                <p>95%</p>
                <div className='progress w-[95%]'></div>
            </div>
        </div>
        <div className="skill_items">
            <h5>JavaScript</h5>
            <div className='progress_bar'>
                <p>85%</p>
                <div className='progress w-[87%]'></div>
            </div>
        </div>
        <div className="skill_items">
            <h5>React Js</h5>
            <div className='progress_bar'>
                <p>93%</p>
                <div className='progress w-[93%]'></div>
            </div>
        </div>
        <div className="skill_items">
            <h5>Next Js</h5>
            <div className='progress_bar'>
                <p>87%</p>
                <div className='progress w-[87%]'></div>
            </div>
        </div>
        <div className="skill_items">
            <h5>Tailwind CSS</h5>
            <div className='progress_bar'>
                <p>97%</p>
                <div className='progress w-[90%]'></div>
            </div>
        </div>
        <div className="skill_items">
            <h5>Git & GitHub</h5>
            <div className='progress_bar'>
                <p>80%</p>
                <div className='progress w-[75%]'></div>
            </div>
        </div>

    </>
  )
}

export default Skills