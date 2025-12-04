import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from "react";

import logoPrimary from "../logo-files/primary-light.svg";

export default function Navbar() {
  const location = useLocation();
  const navRef = useRef(null);

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
  }, []); // Empty dependency array - only runs on mount

  return (
    <nav
      ref={navRef}
      className="font-sans flex justify-between items-center px-8 py-4 shadow-sm h-[6.375rem] bg-fade-black fixed w-full 
      z-[9999] transition-all duration-700 ease-out opacity-0 -translate-y-5"
    >
      <div className="absolute top-0 left-0 w-full h-[6.375rem] bg-background/70 backdrop-blur-[50px] z-[-1]" />

      <a href=".">
        <img src={logoPrimary} alt="Logo" className="h-[10rem] w-auto" />
      </a>

      <div className="flex gap-[2.5rem] ">
        <Link to="/" className={linkStyle('/')}>Home</Link>
        <Link to="/about" className={linkStyle('/about')}>About</Link>
        <Link to="/case-studies" className={linkStyle('/case-studies')}>Case Studies</Link>
        <Link to="/contact" className={linkStyle('/contact')}>Contact</Link>
      </div>
    </nav>
  );
}