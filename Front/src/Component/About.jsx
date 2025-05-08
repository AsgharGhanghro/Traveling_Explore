/* eslint-disable jsx-a11y/anchor-is-valid */

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from '../Pages/Footer';
import { Link } from 'react-router-dom';
import { 
 
  Email, 
  LinkedIn, 
  Public,
  LocationOn,
  Groups,
  Star,
  CardTravel
} from '@mui/icons-material';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const personalInfo = [
    
    { icon: <Email className="text-blue-500" />, text: 'asghargh540@gmail.com' },
    { 
      icon: <LinkedIn className="text-blue-500" />, 
      text: 'LinkedIn Profile',
      link: 'https://www.linkedin.com/feed/' 
    },
  
    { 
      icon: <Public className="text-blue-500" />, 
      text: 'Fiverr Profile',
      link: 'https://www.fiverr.com/users/asghar_ned/manage_gigs' 
    }
  ];

  const stats = [
    { icon: <Groups className="text-blue-500 text-3xl" />, number: '100+', label: 'Happy Clients' },
    { icon: <LocationOn className="text-blue-500 text-3xl" />, number: '20+', label: 'Destinations' },
    { icon: <CardTravel className="text-blue-500 text-3xl" />, number: '40+', label: 'Tours Organized' },
    { icon: <Star className="text-blue-500 text-3xl" />, number: '4.6', label: 'Average Rating' }
  ];

  return (
    <>
      
      <div className='relative flex items-center justify-center h-[500px] bg-center bg-cover' style={{backgroundImage: "url('/Image/tr3.jpg')"}}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            About <span className="text-blue-400">Our Agency</span>
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Crafting unforgettable journeys since 2020
          </p>
          <Link to="/">
            <button className='text-white bg-transparent border-2 border-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105'>
              Back to Home
            </button>
          </Link>
        </div>
      </div>

     
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-500"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
      
          <div 
            data-aos="fade-right"
            className="relative overflow-hidden rounded-2xl shadow-2xl group"
          >
            <img 
              src="/Image/pic2.avif" 
              alt="Our Team" 
              className="w-full h-full  object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 cursor-pointer bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <h3 className="text-white text-2xl font-bold">Our Team at Work</h3>
            </div>
          </div>

       
          <div 
            data-aos="fade-left"
            className="space-y-8"
          >
            <div>
              <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b-2 border-blue-500 inline-block'>
                Who We Are
              </h2>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm'>
                We are a passionate travel agency committed to providing the best experiences for our clients. 
                Our team of dedicated professionals works tirelessly to ensure your trips are seamless and unforgettable. 
                With years of industry experience, we specialize in crafting personalized journeys that exceed expectations.
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b-2 border-blue-500 inline-block'>
                Our Mission
              </h2>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm'>
                Our mission is to create amazing experiences that inspire and enrich the lives of our clients. 
                We believe in personalized service, attention to detail, and providing exceptional value. 
                From adventure seekers to luxury travelers, we tailor each itinerary to match your unique travel style.
              </p>
            </div>
          </div>
        </div>

      
        <div 
          data-aos="fade-up"
          className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-20 shadow-lg mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Contact the Founder
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {personalInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-500 mb-1">
                  {item.icon}
                </div>
                {item.link ? (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {item.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

       
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            Meet <span className="text-blue-600">Our Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Ali Asghar', 
                role: 'Founder & CEO', 
                image: '/Image/linked.png',
                bio: 'Travel enthusiast with 2+ years experience in crafting perfect journeys.'
              },
              { 
                name: 'Sarah Johnson', 
                role: 'Travel Consultant', 
                image: '/Image/sara.webp',
                bio: 'Specializes in luxury travel and unique cultural experiences.'
              },
              { 
                name: 'Michael Chen', 
                role: 'Customer Support', 
                image: '/Image/mal1.png',
                bio: 'Dedicated to ensuring every client has a seamless experience.'
              }
            ].map((member, index) => (
              <div 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 90}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative h-[430px] cursor-pointer overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-300 font-bold mb-3">
                        {member.role}
                      </p>
                      <p className="text-white mb-3">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
               
              </div>
            ))}
          </div>
        </div>

       
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 shadow-inner">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            Our <span className="text-blue-600">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalization",
                description: "We create tailor-made itineraries that match your unique preferences and travel style.",
                icon: "✨"
              },
              {
                title: "Integrity",
                description: "Honest recommendations and transparent pricing with no hidden fees.",
                icon: "🤝"
              },
              {
                title: "Excellence",
                description: "We strive for perfection in every detail of your travel experience.",
                icon: "🏆"
              }
            ].map((value, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;