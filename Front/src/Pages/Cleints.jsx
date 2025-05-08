import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const clients = [
  {
    image: '/Image/mal1.png',
    name: 'John Wick',
    location: 'New York',
    testimonial: 'This travel agency provided excellent service and helped us plan the perfect vacation. Highly recommended for their attention to detail and personalized itineraries.',
    rating: 5
  },
  {
    image: '/Image/mal3.png',
    name: 'Ahmed Ali',
    location: 'Islamabad',
    testimonial: 'Amazing experience. Their tour guides were exceptionally knowledgeable and the destinations were breathtaking. Everything was perfectly organized.',
    rating: 4
  },
  {
    image: '/Image/mal5.png',
    name: 'Faraz Ali',
    location: 'Karachi',
    testimonial: 'Great customer service and fantastic travel packages. They went above and beyond to accommodate our special requests. Will definitely book again!',
    rating: 3
  },
  {
    image: '/Image/mal2.png',
    name: 'Mehmood',
    location: 'Pakistan',
    testimonial: 'Professional service from start to finish. The hotels and activities selected were top-notch. Made our Japan trip unforgettable.',
    rating: 5
  },
  {
    image: '/Image/mal4.png',
    name: 'Eman Ahmed',
    location: 'Iran',
    testimonial: 'The team handled all our travel needs perfectly. Their local knowledge helped us discover hidden gems we would have missed otherwise.',
    rating: 4
  }
];

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => 
      prev >= clients.length - cardsToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev <= 0 ? clients.length - cardsToShow : prev - 1
    );
  };

  const renderRatingStars = (rating) => {
    return (
      <div className="flex justify-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div 
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Client <span className="text-blue-600 dark:text-blue-400">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear what our valued customers say about their experiences
          </p>
        </div>

        <div className="relative">
         
          <div className="hidden md:grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {clients.slice(0, 3).map((client, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <img 
                      src={client.image} 
                      alt={client.name} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 dark:border-gray-700"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/placeholder-user.png';
                      }}
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {client.rating}.0
                    </div>
                  </div>
                  {renderRatingStars(client.rating)}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-3 mb-1">
                    {client.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-4">
                    {client.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{client.testimonial}"
                  </p>
                </div>
              </div>
            ))}
          </div>


          <div className="md:hidden relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                width: `${(clients.length / cardsToShow) * 100}%`
              }}
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-2 ${cardsToShow === 1 ? 'w-full' : 'w-1/2'}`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-3">
                        <img 
                          src={client.image} 
                          alt={client.name} 
                          className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 dark:border-gray-700"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/placeholder-user.png';
                          }}
                        />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {client.rating}.0
                        </div>
                      </div>
                      {renderRatingStars(client.rating)}
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-2 mb-1">
                        {client.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 text-xs mb-3">
                        {client.location}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 italic text-sm">
                        "{client.testimonial}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-gray-800 dark:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-gray-800 dark:text-white" />
            </button>
          </div>

         
          <div className="md:hidden flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(clients.length / cardsToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * cardsToShow)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex >= index * cardsToShow && currentIndex < (index + 1) * cardsToShow ? 'bg-blue-600 w-4' : 'bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;