import React from 'react'
import Image from 'next/image'
// import logoLink from '../../../public/sklogo.png' 
import SocialLinks from '@/UI/SocialLinks'

import { BsWhatsapp } from 'react-icons/bs'



const Footer = () => {
  return (
    <div>
      <footer className='bg-stone-700 py-12'>
  <div className="flex gap-5 flex-col items-center justify-center
  text-white
   px-4 sm:px-6 lg:px-8">
      <Image
             src="/sklogo.png"
            alt="SK Logo"
            width={120}
            height={60}
            priority 
            // className="border border-amber-50"
      />
    <p className='text-lg text-blue-200 tracking-wider'>
      Let's create something memorable togeather.
      </p>

    <a 
      href="https://wa.me/218931640416?text=Hi%20I%20came%20from%20your%20portfolio.%20I%20want%20to%20hire%20you"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-5 
      bg-blue-700 hover:bg-blue-900 text-white text-xl px-8 py-2 
      rounded-lg transition-colors duration-200"
>
  Let's Talk
  <BsWhatsapp className="text-white text-xl" />
</a>

    <SocialLinks/>


    <p className="text-lg text-blue-200 tracking-wider">
      © 2026 Shakil Khan. All rights reserved.
    </p>
  </div>
</footer>
    </div>
  )
}

export default Footer