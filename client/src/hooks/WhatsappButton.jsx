'use client'

import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const WhatsappButton = ({ className = '' }) => {
  return (
    <a 
      href="https://wa.me/218931640416?text=Hi%20I%20came%20from%20your%20portfolio.%20I%20want%20to%20hire%20you"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-3 
        bg-gradient-to-br from-[#ac0582] to-[rgb(4,39,78)] hover:from-[#ac0582] hover:to-[#04274e] 
        text-white font-medium text-lg px-8 py-2 
        rounded-full shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-blue-900/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out border border-[rgba(240,171,252,0.4)] overflow-hidden ${className}`}
    >
      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <h6 className="relative z-10 text-xl tracking-wide">Let's Talk</h6>
      <BsWhatsapp className="relative z-10 text-2xl text-emerald-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ease-out flex-shrink-0" />
    </a>
  )
}

export default WhatsappButton