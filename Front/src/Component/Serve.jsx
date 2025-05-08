import { Link } from "react-router-dom";
import Footer from "../Pages/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const services = [
  {
    icon: "🏨",
    title: "Hotel Booking",
    description:
      "We offer premium hotel bookings with best price guarantee. Access to 500,000+ hotels worldwide with flexible cancellation policies and exclusive member discounts.",
    features: ["Best Price Guarantee", "24/7 Support", "Free Cancellation"],
    link: "/hotel",
  },
  {
    icon: "🛳️",
    title: "Ship Party",
    description:
      "Experience luxury yacht parties with premium catering and entertainment. Our curated ship parties feature international DJs, gourmet food, and breathtaking ocean views.",
    features: ["Private Yachts", "Premium Catering", "Themed Events"],
    link: "/hotel",
  },
  {
    icon: "🌄",
    title: "Sunday Night Picnic",
    description:
      "Organized sunset picnics at scenic locations with gourmet baskets, cozy setups, and ambient lighting. Perfect for romantic evenings or family gatherings.",
    features: ["Custom Menus", "Scenic Locations", "Full Setup Service"],
    link: "/hotel",
  },
  {
    icon: "✈️",
    title: "Flight Booking",
    description:
      "Comprehensive flight booking service with real-time price tracking. We compare all major airlines to find you the best routes and deals for your journey.",
    features: ["Price Alerts", "Multi-city Bookings", "Seat Selection"],
    link: "/FliBus",
  },
  {
    icon: "🏖️",
    title: "Beach Resorts",
    description:
      "Exclusive access to luxury beach resorts with private villas, spa packages, and water sports. Our partners include the most prestigious coastal properties worldwide.",
    features: ["All-inclusive Packages", "Private Beaches", "VIP Treatment"],
    link: "/hotel",
  },
  {
    icon: "🏕️",
    title: "Adventure Tours",
    description:
      "Curated adventure packages including hiking, safari, and extreme sports. All tours include certified guides, premium equipment, and safety assurances.",
    features: ["Expert Guides", "Custom Itineraries", "Eco-friendly"],
    link: "/venue",
  },
];

const Serve = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <>
      <div
        className="relative flex items-center justify-center h-96 bg-center bg-cover"
        style={{ backgroundImage: "url('/Image/tr10.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Premium Services
          </h1>
          <Link to="/">
            <button className="text-white bg-transparent border-2 border-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
              Explore All Services
            </button>
          </Link>
        </div>
      </div>

      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive travel services designed for your
              comfort and adventure
            </p>
          </div>

          <div className="hidden md:grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="mb-4">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-center mb-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link to={item.link}>
                    <button className="mt-auto w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                      <div className="p-6">
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                          {item.description}
                        </p>
                        <div className="mb-3">
                          {item.features.slice(0, 2).map((feature, i) => (
                            <div key={i} className="flex items-center mb-1">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                              <span className="text-xs text-gray-600 dark:text-gray-400">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                        <Link to={item.link}>
                          <button className="mt-auto w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 p-2 rounded-full shadow-md z-10"
            >
              <ChevronLeft className="text-gray-800 dark:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 p-2 rounded-full shadow-md z-10"
            >
              <ChevronRight className="text-gray-800 dark:text-white" />
            </button>
            <div className="flex justify-center mt-4 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Serve;
