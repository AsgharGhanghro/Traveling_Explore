/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from './theme';
import SignUp from './SignUp';
import { Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from '@mui/icons-material';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/gallery", name: "Gallery" },
    { path: "/serve", name: "Services" },
    { path: "/venue", name: "Venue" },
    { path: "/about", name: "About" },
    { path: "/flibus", name: "FliBus" },
    { path: "/booking", name: "Booking" },
    { path: "/cancel", name: "CancelBooking" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav
      data-aos="fade-down"
      className={`fixed left-2 right-2 z-50 transition-all duration-300 ${
        scrolled
          ? 'dark:bg-gray-800/95 bg-white/95 shadow-lg py-0 backdrop-blur-sm'
          : 'dark:bg-gray-800/80 bg-white/80 py-2 backdrop-blur-sm'
      } ${
        isMobile 
          ? 'rounded-none border-t-0 border-x-0' 
          : 'rounded-lg mx-4 mt-2 border dark:border-gray-700 border-gray-200'
      }`}
    >
      <div className={`container mx-auto px-4 flex justify-between items-center h-16 ${
        isMobile ? 'max-w-full' : 'max-w-7xl'
      }`}>
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300"
        >
          ExploreEase
        </Link>

        
        <div className="hidden md:flex items-center">
          <div className="flex flex-wrap justify-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors
                  text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400
                  hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center ml-4">
            <SignUp />
            <button
              onClick={toggleTheme}
              className="p-2 ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <LightModeIcon className="text-yellow-400" /> : <DarkModeIcon className="text-gray-600" />}
            </button>
          </div>
        </div>

      
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? <LightModeIcon className="text-yellow-400" /> : <DarkModeIcon className="text-gray-600" />}
          </button>
          
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            {open ? <CloseIcon className="text-gray-600 dark:text-gray-300" /> : <MenuIcon className="text-gray-600 dark:text-gray-300" />}
          </button>
        </div>
      </div>

      
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-md text-sm font-medium transition-colors
                text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400
                hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t dark:border-gray-700">
            <SignUp />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;