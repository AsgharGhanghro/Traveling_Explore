/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const destinations = [
  {
    image: '/Image/pic4.avif',
    title: 'France, Italy',
    description: 'France, located in Western Europe, is known for its rich history, culture, cuisine, and landmarks like the Eiffel Tower. Italy offers ancient ruins, Renaissance art, and world-class cuisine.',
    price: '$1,299',
    duration: '7 Days'
  },
  {
    image: '/Image/pic5.avif',
    title: 'Rome, Paris',
    description: 'Paris, the capital of France, is known for its iconic landmarks like the Eiffel Tower. Rome boasts ancient wonders like the Colosseum and Vatican City, center of the Catholic world.',
    price: '$1,599',
    duration: '8 Days'
  },
  {
    image: '/Image/pic3.avif',
    title: 'Pakistan, Lahore',
    description: 'Lahore is Pakistan\'s cultural heart with Mughal-era landmarks like Badshahi Mosque. The city offers vibrant bazaars, delicious cuisine, and warm hospitality.',
    price: '$899',
    duration: '5 Days'
  },
  {
    image: '/Image/pic6.avif',
    title: 'Japan, Tokyo',
    description: 'Tokyo blends ultramodern with traditional, from neon-lit skyscrapers to historic temples. Experience cutting-edge technology, cherry blossoms, and world-renowned cuisine.',
    price: '$2,199',
    duration: '10 Days'
  },
  {
    image: '/Image/pic7.avif',
    title: 'Australia, Sydney',
    description: 'Sydney offers iconic Opera House, Harbour Bridge, and stunning beaches. Experience vibrant city life, wildlife encounters, and the Great Barrier Reef nearby.',
    price: '$1,899',
    duration: '9 Days'
  },
  {
    image: '/Image/pic8.avif',
    title: 'USA, New York',
    description: 'New York City, the "Big Apple", features Times Square, Central Park, Statue of Liberty, and world-class museums. A melting pot of cultures with endless entertainment options.',
    price: '$1,499',
    duration: '6 Days'
  }
];

const Destination = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  const visibleDestinations = showAll ? destinations : destinations.slice(0, 3);

  return (
    <div className='py-16 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h3 className='text-4xl font-bold mb-4 text-gray-800 dark:text-white'>
            Popular <span className='text-blue-400'> Destinations</span>
          </h3>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Discover our most sought-after travel destinations with exclusive packages
          </p>
        </div>

        
        <div className='hidden md:grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {visibleDestinations.map((item, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className='bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2'
            >
              <div className='relative overflow-hidden h-60'>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                />
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
                  <span className='bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full'>
                    {item.price}
                  </span>
                </div>
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-xl font-bold text-gray-800 dark:text-white'>{item.title}</h3>
                  <span className='text-sm text-gray-500 dark:text-gray-400'>{item.duration}</span>
                </div>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>{item.description}</p>
                <Link to='/venue' className='w-full mt-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300'>
                  View Package
                </Link>
              </div>
            </div>
          ))}
        </div>

       
        <div className='md:hidden relative'>
          <div className='overflow-hidden'>
            <div 
              className='flex transition-transform duration-300'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {destinations.map((item, index) => (
                <div 
                  key={index}
                  className='w-full flex-shrink-0 px-2'
                >
                  <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden'>
                    <div className='relative overflow-hidden h-48'>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
                        <span className='bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full'>
                          {item.price}
                        </span>
                      </div>
                    </div>
                    <div className='p-4'>
                      <div className='flex justify-between items-start mb-2'>
                        <h3 className='text-lg font-bold text-gray-800 dark:text-white'>{item.title}</h3>
                        <span className='text-sm text-gray-500 dark:text-gray-400'>{item.duration}</span>
                      </div>
                      <p className='text-gray-600 dark:text-gray-300 text-sm mb-3'>{item.description}</p>
                      <Link to='/venue' className='w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors duration-300'>
                        View Package
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={prevSlide}
            className='absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 p-2 rounded-full shadow-md z-10'
          >
            <ChevronLeft className='text-gray-800 dark:text-white' />
          </button>
          <button 
            onClick={nextSlide}
            className='absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 p-2 rounded-full shadow-md z-10'
          >
            <ChevronRight className='text-gray-800 dark:text-white' />
          </button>
        </div>

        {!showAll && (
          <div className='text-center mt-10'>
            <button 
              onClick={() => setShowAll(true)}
              className='px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300'
            >
              View All Destinations
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destination;