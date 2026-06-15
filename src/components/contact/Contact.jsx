import React from 'react'
import "./Contact.css"
import ContactForm from './ContactForm'

import { BsSend } from 'react-icons/bs'
import { LuSparkles } from 'react-icons/lu'
import { BiPhone } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
const Contact = () => {
  return (
    <div 
      className='py-6  px-4 sm:px-8 bg-gray-900/40 rounded-2xl'>
            {/* header */}
      <div className="contact_header
        flex items-center justify-center
        gap-3 sm:gap-6  py-3 
        border border-violet-500/20
       bg-gray-800/40 rounded-2xl
        text-xl sm:text-2xl md:text-3xl text-blue-100 font-medium">
        <BsSend className='text-fuchsia-400'/>
        <h3 >Get In Touch  </h3>
        <LuSparkles className='text-fuchsia-400'/>
      </div>


      <div className="contact_hero
          mt-6 grid grid-cols-1 gap-6">

        <div className="content_card 
          max-w-lg py-6 px-2 lg:px-4
          rounded-3xl border border-violet-500/20">
          <span 
            className="inline-block w-fit bg-fuchsia-500/10 
            px-4 py-2 mb-5            
            text-base font-medium text-blue-100 italic     
            border border-fuchsia-500/20 rounded-full">
              Available for work
          </span>

          <h1 className="hero_title
            font-medium leading-tight tracking-wider text-white
            text-2xl xl:text-3xl">
              Let's create something <br />
              <span className='text-fuchsia-200'> Amazing Together</span>
          </h1>

          <p className="mt-5 max-w-md 
            text-blue-200 text-base sm:text-lg leading-relaxed tracking-wider">
            I'm always open to discussing new opportunities,
           collaborations, and interesting projects.
          </p>
        </div>

        <div className=" address_card
            max-w-lg  py-6 px-2 lg:px-4 
            rounded-3xl border border-violet-500/20">

          <p className='flex items-center gap-4 py-3
            border-b border-white/5 text-blue-100
            text-base sm:text-lg tracking-wide'>
            <MdEmail className="icon" />
              shakilkhan97135@gmail.com
          </p>

          <p className='flex items-center gap-4 py-3
           border-b border-white/5 text-blue-100
            text-base sm:text-lg tracking-wide'>
            <BiPhone className="icon"  />
            +218 9316-40416
          </p>

          <p className='flex items-center gap-4 py-3
            text-blue-100 text-base sm:text-lg tracking-wide'>
              <GoLocation className="icon" />
                Tripoli, Libya
              <span className="italic text-green-400 ml-2">
                (Present)
              </span>
          </p>
        </div>

        <ContactForm/>


      </div>
    </div>
  )
}

export default Contact
