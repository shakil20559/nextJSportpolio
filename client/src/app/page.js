
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
      
      <section id="home" >
        <Hero/>
      </section>


      <section id="about">
        <About/>
      </section>
      
      <section id="projects">
        <Project/>
      </section>

      <section id="contact">
        <Contact/>
      </section>

      <Footer/>
    </div>
  )
}

export default page
