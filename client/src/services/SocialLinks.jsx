import React from 'react'


import { FaFacebook, FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
const SocialLinks = () => {
  return (
    <div className="social_links flex items-center justify-center 
        my-3 gap-4 sm:gap-6 md:gap-8 ">
          
        <a href="https://www.facebook.com/shakil20559"
          target="_blank"
          rel="noopener noreferrer">
          <FaFacebook />
        </a>

        <a href="https://www.instagram.com/shakil20559?igsh=MXc5ZzAzNDB1ZDVkag=="
          target="_blank"
          rel="noopener noreferrer" >
          <BsInstagram />
        </a>

        <a href="https://www.linkedin.com/in/shakil20559"
          target="_blank"
          rel="noopener noreferrer" >
          <LiaLinkedin />
        </a>

        <a href="https://github.com/shakil20559"
          target="_blank"
          rel="noopener noreferrer" >
          <FaGithub />
        </a>          
    </div>
  )
}

export default SocialLinks


