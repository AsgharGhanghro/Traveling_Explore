import React, { useEffect, useState } from 'react';
import Destination from './Destination';
import Services from './Services';
import Cleints from './Cleints';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === 3 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const carouselImages = [
    '/Image/pic2.avif',
    '/Image/pic4.avif',
    '/Image/pic5.avif',
    '/Image/pic3.avif'
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? 3 : prev - 1));
  };

  return (
    <>
      
      <div className="relative w-full h-screen overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div 
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="relative flex justify-center items-center flex-col h-full text-center px-4"
        >
          <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6' data-aos="zoom-out-up">
            Explore the world with Us
          </h1>
          <p className='text-white text-xl md:text-2xl font-serif mb-8'>
            Discover the amazing places at exclusive deals
          </p>
          <Link to="/contact">
            <button className='text-white font-bold text-lg md:text-xl border-2 border-white px-8 py-3 bg-transparent rounded-lg shadow-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105'>
              Get in Touch
            </button>
          </Link>
        </div>

     
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-white text-3xl" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="text-white text-3xl" />
        </button>

       
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    
      <div className="w-full bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Explore <span className="text-blue-600 dark:text-blue-400">Pakistan</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the breathtaking landscapes and rich culture of Pakistan
            </p>
          </div>
          
          <div className="w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622341.715200987!2d67.0301099!3d27.987731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Map of Pakistan"
              className="filter grayscale-0 hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 cursor-pointer">
            {[
              { name: 'Northern Areas', icon: '🏔️' },
              { name: 'Historical Sites', icon: '🏛️' },
              { name: 'Coastal Line', icon: '🏖️' },
              { name: 'Cultural Cities', icon: '🏙️' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-medium text-gray-800 dark:text-white">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Destination />
      <Services />
      <Cleints />
      <Footer />
    </>
  );
};

export default Home;