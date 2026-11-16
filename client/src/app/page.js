
import About from '@/features/about/About'
import Contact from '@/features/contact/Contact'
import Hero from '@/features/Hero/Hero'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HomeProjectsSection from '@/features/Hero/HomeProjectsSection';
import React from 'react'

const page = () => {
  return (
    <div className='home_app'>
      <Header/>
      
      <section id="home" className="pb-20 pt-10 md:pb-24 ">
        <Hero/>
      </section>


      <section id="about" className="py-16 md:py-20 lg:py-24 bg-[#050212]">
        <About/>
      </section>
      
      <section id="projects" className="py-16 ">
        <HomeProjectsSection/>
      </section>

      <section id="contact" className="py-14 md:py-20 lg:py-24  bg-gray-900/40 rounded-2xl">
        <Contact/>
      </section>

      <Footer className="py-12 md:py-16 "/>
    </div>
  )
}

export default page
