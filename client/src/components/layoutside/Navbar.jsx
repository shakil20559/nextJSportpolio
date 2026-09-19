"use client";

import { Link } from "react-scroll";
import "./Layout.css";

function Navbar({ isOpen, setIsOpen }) {
  const handleNavClick = () => {
    setIsOpen(false);
  };

  
  return (
    <nav 
    className={`nav ${isOpen ? "open" : ""}`}
    >
      <Link
        className="navLink"
        activeClass="active"
        to="home"
        smooth
        spy
        duration={400}
        offset={-95}
        onClick={handleNavClick}
      >
        Home
      </Link>

      <Link
        className="navLink"
        activeClass="active"
        to="about"
        smooth
        spy
        duration={400}
        offset={-20}
        onClick={handleNavClick}
      >
        About
      </Link>

      <Link
        className="navLink"
        activeClass="active"
        to="projects"
        smooth
        spy
        duration={400}
        offset={-40}
        onClick={handleNavClick}
      >
        Projects
      </Link>

      <Link
        className="navLink"
        activeClass="active"
        to="contact"
        smooth
        spy
        duration={400}
        offset={-40}
        onClick={handleNavClick}
      >
        Contact
      </Link>
    </nav>


  );
}

export default Navbar;
