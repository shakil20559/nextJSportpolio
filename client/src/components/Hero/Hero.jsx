 import React from 'react'
 import './Hero.css'
import { LuSparkles } from 'react-icons/lu'
import { BsWhatsapp } from 'react-icons/bs'
import TypeWriter from '../../services/TypeWriter'
import Profile from './Profile'
import WhatsappButton from '@/hooks/WhatsappButton'


const Hero = () => {
  return (
    <div className=' flex  justify-center  gap-6 
    flex-col lg:flex-row lg:justify-between
    mx-4 sm:mx-6 xl:mx-8 2xl:mx-14'>
   
      <div className='hero_title lg:w-1/2 sm:mx-auto'>
        <h3 
          className='flex justify-center  items-center w-full max-w-md
          text-xl lg:text-2xl text-blue-100 tracking-wider
          border rounded-2xl border-fuchsia-300/40
          py-2 px-2' >
          FRONTEND DEVELOPER 
            <LuSparkles 
            className='text-2xl ml-3  text-blue-400 font-semibold sm:ml-5'/> 
        </h3>

        <h2 
          className="greting  mt-5 mx-2 text-3xl text-fuchsia-300 font-normal italic">
          Hi I`m
        </h2>
        <h1 className="name text-7xl text-blue-100 my-5 font-medium">
            <span>S</span>HAKIL <br /> <span>K</span>HAN
        </h1>

        <TypeWriter/>  
        <p className='mt-6 mb-2 text-lg min-[420px]:text-2xl md:text-2xl max-w-xl text-blue-100'>
          I build <span>complete, responsive</span> web applications from design to database with <span>clean code</span> that scales at every <span>screen size</span>.
        </p>

        <WhatsappButton className='w-full '/>
        
    </div>
        <Profile/>
    </div>
  )
}

export default Hero