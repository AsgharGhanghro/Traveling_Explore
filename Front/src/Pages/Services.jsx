import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Flight as FlightIcon,
  LocationCity as HotelIcon,
  BeachAccess as BeachIcon,
  DirectionsCar as CarIcon,
  Restaurant as DiningIcon,
  Hiking as AdventureIcon,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';

const services = [
  {
    icon: <FlightIcon className="text-white" fontSize="large" />,
    title: 'Flight Booking',
    description: 'Hassle-free bookings with 24/7 support and best price guarantee.',
    features: ['Instant Confirmation', 'Multi-airline Options', 'Price Alerts'],
    color: 'bg-gradient-to-br from-blue-500 to-blue-700'
  },
  {
    icon: <HotelIcon className="text-white" fontSize="large" />,
    title: 'Hotel Booking',
    description: '500,000+ properties worldwide with exclusive member discounts.',
    features: ['Free Cancellation', 'Loyalty Rewards', 'Best Price Guarantee'],
    color: 'bg-gradient-to-br from-purple-500 to-purple-700'
  },
  {
    icon: <BeachIcon className="text-white" fontSize="large" />,
    title: 'Beach Resorts',
    description: 'Luxury beachfront properties with all-inclusive packages.',
    features: ['Private Beaches', 'Water Sports', 'Spa Services'],
    color: 'bg-gradient-to-br from-teal-500 to-teal-700'
  },
  {
    icon: <CarIcon className="text-white" fontSize="large" />,
    title: 'Car Rentals',
    description: 'Premium vehicles with unlimited mileage and 24/7 support.',
    features: ['Luxury Fleet', 'No Hidden Fees', 'Airport Pickup'],
    color: 'bg-gradient-to-br from-amber-500 to-amber-700'
  },
  {
    icon: <DiningIcon className="text-white" fontSize="large" />,
    title: 'Dining Experiences',
    description: 'Curated culinary adventures with top-rated restaurants.',
    features: ['Michelin Star', 'Local Cuisine', 'Private Chefs'],
    color: 'bg-gradient-to-br from-rose-500 to-rose-700'
  },
  {
    icon: <AdventureIcon className="text-white" fontSize="large" />,
    title: 'Adventure Tours',
    description: 'Certified guides with premium equipment for safe adventures.',
    features: ['Hiking & Trekking', 'Custom Itineraries', 'Eco-friendly'],
    color: 'bg-gradient-to-br from-emerald-500 to-emerald-700'
  }
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const getCardsToShow = () => {
    if (window.innerWidth >= 1280) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };
  
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => 
      prev >= services.length - cardsToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev <= 0 ? services.length - cardsToShow : prev - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Our <span className="text-blue-600 dark:text-blue-400">Premium</span> Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exceptional travel experiences tailored just for you
          </p>
        </div>

        <div 
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
        
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              width: `${(services.length / cardsToShow) * 100}%`
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-4 transition-all duration-300 ${cardsToShow === 1 ? 'w-full' : cardsToShow === 2 ? 'w-1/2' : 'w-1/3'}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-full">
                  <div className={`${service.color} rounded-2xl shadow-xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:scale-105 hover:shadow-2xl`}>
                    <div className="p-8 flex-grow">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-white/90 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-white/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="px-8 pb-8">
                      <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40">
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 focus:outline-none"
            aria-label="Previous services"
          >
            <ChevronLeft className="text-gray-800 dark:text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 focus:outline-none"
            aria-label="Next services"
          >
            <ChevronRight className="text-gray-800 dark:text-white" />
          </button>
        </div>

       
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: services.length - cardsToShow + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300 dark:bg-gray-600'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;