import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaTools, FaStar, FaProjectDiagram, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 fixed w-full top-0 z-20 shadow-xl">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <div className="logo text-3xl font-bold tracking-wide text-yellow-500">
          VV Electrical
        </div>
        <div className="ml-auto md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
        <div className={`absolute top-16 left-0 bg-gray-900 w-full p-6 space-y-4 ${menuOpen ? 'block' : 'hidden'} md:flex md:static md:w-auto md:p-0 md:space-y-0 md:space-x-6 md:bg-transparent`}>
          <Link to="/" onClick={closeMenu} className="block hover:text-yellow-500 transition duration-300 ease-in-out flex items-center py-2 md:py-0">
            <FaHome className="mr-2 text-lg" />
            Home
          </Link>
          <a href="#about-us" onClick={closeMenu} className="block hover:text-yellow-500 transition duration-300 ease-in-out flex items-center py-2 md:py-0">
            <FaInfoCircle className="mr-2 text-lg" />
            About Us
          </a>
          <a href="#services" onClick={closeMenu} className="block hover:text-yellow-500 transition duration-300 ease-in-out flex items-center py-2 md:py-0">
            <FaTools className="mr-2 text-lg" />
            Services
          </a>
          <a href="#testimonials" onClick={closeMenu} className="block hover:text-yellow-500 transition duration-300 ease-in-out flex items-center py-2 md:py-0">
            <FaStar className="mr-2 text-lg" />
            Testimonials
          </a>
          <Link to="/projects" onClick={closeMenu} className="block hover:text-yellow-500 transition duration-300 ease-in-out flex items-center py-2 md:py-0">
            <FaProjectDiagram className="mr-2 text-lg" />
            Projects
          </Link>
          <a href="#contact" onClick={closeMenu} className="block hover:text-yellow-500 transition duration-300 ease-in-out flex items-center py-2 md:py-0">
            <FaPhoneAlt className="mr-2 text-lg" />
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
