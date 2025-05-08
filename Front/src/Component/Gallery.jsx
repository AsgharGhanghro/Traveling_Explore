import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Pages/Footer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const gallery = [
  {
    image: '/Image/tr1.avif',
    title: 'Tour with Us',
    description: 'Embarking on a tour with unknown people can be an exciting adventure. It offers a chance to meet new faces, share unique experiences, and learn about different cultures.',
    icon: '👥'
  },
  {
    image: '/Image/tr2.jpg',
    title: 'Tour with Family',
    description: 'A family tour is a wonderful experience filled with adventure, bonding, and exploration. Traveling together creates unforgettable memories, relationships in discovering new places.',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    image: '/Image/tr3.jpg',
    title: 'Tour with Friends',
    description: 'Exploring new places, sharing laughs, trying delicious foods, and capturing memories together. Its all about adventure, bonding, and creating unforgettable moments!',
    icon: '👫'
  },
  {
    image: '/Image/tr4.jpg',
    title: 'Tour with Yourself',
    description: 'Exploring a new city alone allows for self-discovery, independence, and flexibility. It\'s an opportunity to immerse yourself fully and create personal memories.',
    icon: '🧘'
  },
  {
    image: '/Image/tr5.jpg',
    title: 'Luxury Tours',
    description: 'Experience the pinnacle of comfort with our luxury tours. Premium accommodations, private guides, and exclusive experiences tailored to your preferences.',
    icon: '✨'
  },
  {
    image: '/Image/tr6.jpg',
    title: 'Adventure Tours',
    description: 'For thrill-seekers and nature lovers. Hiking, rafting, and exploring untouched landscapes with expert guides ensuring safety and excitement.',
    icon: '🏔️'
  }
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <>
     
      <div className='relative flex items-center justify-center h-96 bg-center bg-cover' style={{backgroundImage: "url('/Image/pic11.avif')"}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Gallery</h1>
          <Link to="/">
            <button className='text-white bg-transparent border-2 border-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105'>
              Explore More
            </button>
          </Link>
        </div>
      </div>
     
     
      <div className='py-16 bg-gray-50 dark:bg-gray-900'>
        <div className='container mx-auto px-4'>
          <div 
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Travel <span className="text-blue-600 dark:text-blue-400">Experiences</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the different ways you can explore the world with us
            </p>
          </div>

          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {gallery.map((item, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 text-xl p-2 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-800 dark:text-white mb-3'>{item.title}</h3>
                  <p className='text-gray-600 dark:text-gray-300'>{item.description}</p>
                  <Link to='/venue' className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline">
                    View Tours →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;