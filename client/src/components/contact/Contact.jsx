import React from 'react'
import "./Contact.css"
import ContactForm from './ContactForm'

import { BsSend } from 'react-icons/bs'
import { LuSparkles } from 'react-icons/lu'

const Contact = () => {
  return (
    <div className=' py-6 px-3 sm:px-8 bg-gray-900/40 rounded-2xl w-full '>
      {/* Header */}
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-4 py-3 sm:py-4 border border-violet-500/20 bg-gray-800/40 rounded-2xl text-xl sm:text-2xl md:text-3xl text-blue-100 font-medium">
        <BsSend className='text-fuchsia-400' />
        <h3 className='contact_header'>Get In Touch</h3>
        <LuSparkles className='text-fuchsia-400' />
      </div>

      {/* Hero & Form Grid */}
      <div className="w-full max-w-7xl mx-auto mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        
        {/* Content Card */}
        <div className=" w-full py-6 sm:py-8 px-5 sm:px-8 rounded-3xl border border-violet-500/20 bg-gray-800/20 flex flex-col justify-between h-full">
          <div>
            <span className="inline-block w-fit bg-fuchsia-500/10 px-3.5 py-1.5 mb-5 text-xs sm:text-sm font-medium text-fuchsia-300 italic border border-fuchsia-500/20 rounded-full">
              Available for work
            </span>

            <h1 className="hero_title font-medium leading-tight tracking-wider text-white text-2xl sm:text-3xl lg:text-4xl">
              Let's create something <br />
              <span className='text-fuchsia-200'>Amazing Together</span>
            </h1>

            <p className="mt-4 text-blue-200 text-sm sm:text-base leading-relaxed tracking-wide">
              I'm always open to discussing new opportunities, collaborations, and interesting projects.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full">
          <ContactForm />
        </div>

      </div>
    </div>
  )
}

export default Contact