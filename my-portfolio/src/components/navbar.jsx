import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const linkStyle = (path) =>
    `px-4 py-2 transition ${
      location.pathname === path ? 'text-primary font-semibold' : 'hover:text-primary'
    }`;

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <Link to="/" className="text-xl font-heading font-bold">MyPortfolio</Link>
      <div className="flex gap-6">
        <Link to="/" className={linkStyle('/')}>Home</Link>
        <Link to="/about" className={linkStyle('/about')}>About</Link>
        <Link to="/case-studies" className={linkStyle('/case-studies')}>Case Studies</Link>
        <Link to="/contact" className={linkStyle('/contact')}>Contact</Link>
      </div>
    </nav>
  );
}