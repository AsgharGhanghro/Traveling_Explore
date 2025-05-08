
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { 
  FacebookRounded as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  EmailRounded as EmailIcon,
  PhoneRounded as PhoneIcon,
  SendRounded as SendIcon
} from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className='mt-12'>
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-16 pb-8 rounded-lg mx-5 mb-4 border dark:border-gray-700 border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
            <div data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                  TravelWithAli
                </span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for unforgettable travel experiences. Explore the world with Ali.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <EmailIcon className="text-blue-400 mr-3" />
                  <span className="text-gray-300 hover:text-white transition-colors duration-300">
                    aliasghargh540@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="text-blue-400 mr-3" />
                  <span className="text-gray-300 hover:text-white transition-colors duration-300">
                    +92 3202376159
                  </span>
                </div>
              </div>
            </div>

            
            <div data-aos="fade-up" data-aos-delay="100" className="lg:pl-10">
              <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/", text: "Home" },
                  { to: "/gallery", text: "Gallery" },
                  { to: "/serve", text: "Services" },
                  { to: "/about", text: "About Us" },
                  { to: "/booking", text: "Booking" },
                  { to: "/contact", text: "Contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to} 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          
            <div data-aos="fade-up" data-aos-delay="200" className="lg:pl-10">
              <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
                Popular Destinations
              </h3>
              <ul className="space-y-3">
                {[
                  "Paris, France",
                  "Karachi, Islamabad",
                  "Tokyo, Japan",
                  "Hydrabad, Punjab",
                  "Sukkur, Multan",
                  "Moro, Karachi"
                ].map((destination, index) => (
                  <li key={index} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    {destination}
                  </li>
                ))}
              </ul>
            </div>

          
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
                Newsletter
              </h3>
              <p className="text-gray-300 mb-4">
                Subscribe to get special offers and travel inspiration
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-l-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 rounded-r-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center"
                >
                  <SendIcon />
                </button>
              </form>
              <div className="flex space-x-4 mt-6">
                <a href="https://www.facebook.com/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  <FacebookIcon className="text-2xl hover:-translate-y-1 transition-transform duration-300" />
                </a>
                <a href="https://www.instagram.com/" className="text-gray-300 hover:text-pink-500 transition-colors duration-300">
                  <InstagramIcon className="text-2xl hover:-translate-y-1 transition-transform duration-300" />
                </a>
                <a href="https://www.twitter.com/" className="text-gray-300 hover:text-gray-400 transition-colors duration-300">
                  <TwitterIcon className="text-2xl hover:-translate-y-1 transition-transform duration-300" />
                </a>
                <a href="https://www.linkedin.com/feed/" className="text-gray-300 hover:text-blue-700 transition-colors duration-300">
                  <LinkedInIcon className="text-2xl hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

         
          <div 
            className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
            data-aos="fade-up"
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TravelWithAli. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;