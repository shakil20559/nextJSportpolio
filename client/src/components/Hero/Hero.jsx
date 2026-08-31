"use client"
import React from 'react'
import './Hero.css'
import { LuSparkles } from 'react-icons/lu'
import TypeWriter from '../../services/TypeWriter'
import Profile from './Profile'
import WhatsappButton from '@/hooks/WhatsappButton'
import { motion } from 'motion/react'

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <motion.div 
      className='flex justify-center gap-6 
      flex-col lg:flex-row lg:justify-between
      mx-4 sm:mx-6 xl:mx-8 2xl:mx-14 '
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className='hero_title lg:w-1/2 sm:mx-auto'>
       
        <motion.h3 
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)",
            transition: { duration: 0.2 }
          }}
          className='flex justify-center items-center w-full max-w-md
          text-xl lg:text-2xl text-blue-100 tracking-wider
          border rounded-2xl border-fuchsia-300/40
          py-2 px-2'
        >
          FRONTEND DEVELOPER 
          <motion.span
            animate={floatAnimation}
          >
            <LuSparkles 
              className='text-2xl ml-3 text-blue-400 font-semibold sm:ml-5'
            />
          </motion.span>
        </motion.h3>

        {/* Greeting - Slide from left */}
        <motion.h2 
          variants={itemVariants}
          className="greting mt-5 mx-2 text-3xl text-fuchsia-300 font-normal italic"
        >
          Hi I`m
        </motion.h2>

        {/* Name - Letter by letter animation */}
        <motion.h1 
          variants={itemVariants}
          className="name text-7xl text-blue-100 my-5 font-medium"
        >
          <motion.span
            whileHover={{ 
              color: "#f0abfc",
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            S
          </motion.span>
          HAKIL <br /> 
          <motion.span
            whileHover={{ 
              color: "#f0abfc",
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            K
          </motion.span>
          HAN
        </motion.h1>

        {/* TypeWriter - Already has animation, add fade */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <TypeWriter />
        </motion.div>

        {/* Description - Fade up */}
        <motion.p 
          variants={itemVariants}
          className='my-8 text-lg min-[420px]:text-2xl md:text-2xl max-w-xl text-blue-100'
        >
          I build <span>complete, responsive</span> web applications from design to database with <span>clean code</span> that scales at every <span>screen size</span>.
        </motion.p>

         <motion.div variants={itemVariants}>
          <WhatsappButton className='w-full' />
        </motion.div>
      </div>

     <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Profile />
      </motion.div>
    </motion.div>
  )
}

export default Hero