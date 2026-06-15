"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";

import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className=" header_con sticky top-0 z-50
      flex items-center justify-between
      px-5 md:px-10 py-3
      backdrop-blur-md
      border-b border-white/10
      " >
      <Image
        src="/sklogo.png"
        alt="Logo"
        width={120}
        height={60}
        priority 
        // className="border border-amber-50"
      />

      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="
        md:hidden
        text-3xl
        text-white
        hover:text-cyan-400
        transition-colors
        "
      >
        {isOpen ? <FaTimes /> : <BiMenu />}
      </button>
    </header>
  );
};

export default Header;