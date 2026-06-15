 import React from 'react'
 import './Hero.css'
import { LuSparkles } from 'react-icons/lu'
import { BsWhatsapp } from 'react-icons/bs'
// import HeroProfile from './HeroProfile'
import TypeWriter from './TypeWriter'
import Profile from './Profile'

const Hero = () => {
  return (
    <div className='flex  justify-center  gap-6 
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
        <p className='mt-5 mb-2 text-2xl max-w-xl text-blue-100'>
          I build responsive, modern and user-friendly web applications with
           <span> clean code</span>.
        </p>

        
        <a href="https://wa.me/218931640416?text=Hi%20I%20came%20from%20your%20portfolio.%20I%20want%20to%20hire%20you"
          target="_blank"
          rel="noopener noreferrer"
          className='btn_globalStyle my-8 w-full max-w-xl'>
            Let's Talk 
            <BsWhatsapp className='ml-3 text-green-400  !important'/>
        </a>
        
      </div>
      {/* <HeroProfile/> */}
      <Profile/>



    </div>
  )
}

export default Hero





// home <div className=' 
    
//      flex-col lg:flex-row'>
//         <div className='flex gap-5 justify-between items-center 
//         flex-col sm:flex-row lg:flex-col 2xl:flex-row'>
//           <Hero/>
//           <TypingAnimation />
//         </div>
//       <ProfileSector/>
//     </div>