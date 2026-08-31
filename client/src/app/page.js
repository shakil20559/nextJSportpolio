
import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Hero from '@/components/Hero/Hero'
import Footer from '@/components/layoutside/Footer'
import Header from '@/components/layoutside/Header'
import Project from '@/components/projects/Project'
import React from 'react'

const page = () => {
  return (
    <div className='home_app'>
      <Header/>
      
      <section id="home" className="py-20 md:py-24 ">
        <Hero/>
      </section>


      <section id="about" className="py-16 md:py-20 lg:py-24 bg-[#050212]">
        <About/>
      </section>
      
      <section id="projects" className="py-16 md:py-24 lg:py-28">
        <Project/>
      </section>

      <section id="contact" className="py-14 md:py-20 lg:py-24  bg-gray-900/40 rounded-2xl">
        <Contact/>
      </section>

      <Footer className="py-12 md:py-16 "/>
    </div>
  )
}

export default page
