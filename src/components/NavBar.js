import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const navLinks = [
  'BANKRUPTCY',
  'COMMERCIAL DISPUTES',
  'CORPORATE DISPUTES',
  'TAX DISPUTES',
  'ECONOMIC CRIME',
];

const additionalLinks = ['BLOG', 'CONTACT'];

export default function Navbar() {
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between font-display">
          <Link to='/'>
          <div className="text-xl text-white transition duration-300 ease-in-out hover:text-lime-400">[Logo]</div>
          </Link>
          <div className="flex">
            <div className="text-white text-xl  hidden lg:flex space-x-6">
              {navLinks.map(link => (
                <Link to={`/${link.toLowerCase()}`}>
                <button
                  key={link}
                  className={`transition duration-300 ease-in-out hover:text-lime-400`}
                  onMouseEnter={() => setHovered(link)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {link}
                </button>
                </Link>
              ))}
            </div>
            <div className="text-white text-xl lg:flex space-x-6 ml-14">
              {additionalLinks.map(link => (
                <Link to={`/${link.toLowerCase()}`}>
                <button
                  key={link}
                  className={`transition duration-300 ease-in-out hover:text-lime-400`}
                  onMouseEnter={() => setHovered(link)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {link}
                </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
