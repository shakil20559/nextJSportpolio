import React from 'react'
import Image from 'next/image'
import SocialLinks from '@/services/SocialLinks'

import  WhatsappButton  from '../../hooks/WhatsappButton' 



const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#0b0813] via-[#0f0b1b] to-[#08060e] relative overflow-hidden">
      <footer className='w-full bg-[#0b0813] text-gray-200 px-4 border-t border-purple-900/30 py-12'>
  <div className="flex gap-5 flex-col items-center justify-center
   text-gray-200 px-4 
 sm:px-6 lg:px-8">
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

    <WhatsappButton className="w-64"/>

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