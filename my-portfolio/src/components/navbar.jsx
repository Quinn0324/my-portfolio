import { Link, useLocation } from 'react-router-dom';

import logoPrimary from "../logo-files/primary-light.svg";

export default function Navbar() {
  const location = useLocation();
  const linkStyle = (path) =>
    `px-4 py-2 transition ${
      location.pathname === path ? 'text-primary font-medium' : 'hover:text-primary'
    }`;

  return (
    <nav className="font-sans flex justify-between items-center px-8 py-4 shadow-sm h-[6.375rem] bg-fade-black fixed w-full">
      <div className="absolute top-0 left-0 w-full h-[6.375rem] bg-background/70 backdrop-blur-[50px] z-[-1]">

      </div>
      <a href="/">
      <img src={logoPrimary} alt="Logo" className="h-[10rem] w-auto" />
      </a>
      <div className="flex gap-[3.125rem] text-base">
        <Link to="/" className={linkStyle('/')}>Home</Link>
        <Link to="/about" className={linkStyle('/about')}>About</Link>
        <Link to="/case-studies" className={linkStyle('/case-studies')}>Case Studies</Link>
        <Link to="/contact" className={linkStyle('/contact')}>Contact</Link>
      </div>
    </nav>
  );
}