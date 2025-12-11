import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";

import logoPrimary from "../logo-files/primary-light.svg";

export default function Navbar() {
  const location = useLocation();
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = (path) =>
    `px-4 py-2 transition ${
      location.pathname === path ? "text-primary" : "hover:text-primary"
    }`;

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Fade in on page load only
    nav.classList.add("opacity-0", "-translate-y-5");

    // Trigger the animation on the next frame
    requestAnimationFrame(() => {
      nav.classList.remove("opacity-0", "-translate-y-5");
    });
    
    // Close menu on route change
    setIsOpen(false);
  }, [location.pathname]); // Close menu when navigating

  return (
    <nav
      ref={navRef}
      className="font-sans flex justify-between items-center px-4 sm:px-8 py-2 sm:py-3 shadow-sm h-auto sm:h-[5rem] bg-fade-black fixed w-full 
      z-[9999] transition-all duration-[1s] easy-ease opacity-0 -translate-y-5"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-background/70 backdrop-blur-[50px] z-[-1]" />

      <a href="/">
        <img src={logoPrimary} alt="Logo" className="h-[5rem] sm:h-[8rem] w-auto" />
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-[2.5rem] text-sm items-center">
        <Link to="/" className={linkStyle('/')}>Home</Link>
        <Link to="/about" className={linkStyle('/about')}>About</Link>
        <Link to="/mywork" className={linkStyle('/mywork')}>My Work</Link>
        <Link to="/contact" className={`${linkStyle('/contact')} text-lg`}>Contact</Link>
        {/* <Link to="/style-guide" className={linkStyle('/style-guide')}>Style Guide</Link> */}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-primary p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-[50px] md:hidden flex flex-col gap-4 p-4 border-t border-primary/20">
          <Link to="/" className={`${linkStyle('/')} block py-2 text-sm`}>Home</Link>
          <Link to="/about" className={`${linkStyle('/about')} block py-2 text-sm`}>About</Link>
          <Link to="/mywork" className={`${linkStyle('/my-work')} block py-2 text-sm`}>My Work</Link>
          <Link to="/contact" className={`${linkStyle('/contact')} block py-2 text-sm`}>Contact</Link>
          <Link to="/style-guide" className={`${linkStyle('/style-guide')} block py-2 text-sm`}>Style Guide</Link>
        </div>
      )}
    </nav>
  );
}