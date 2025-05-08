// /* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaSearch, FaTimes } from 'react-icons/fa';
import { useTheme } from './theme'; 

const Venue = () => {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  
  const destinations = [
    {
                  id: 1,
                  city: 'Islamabad',
                  location: 'Margalla Hills',
                  country: 'Pakistan',
                  description: 'The serene capital city with beautiful mountains and modern architecture.',
                  image: 'https://plus.unsplash.com/premium_photo-1697729760807-27c9c2e07a57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFraXN0YW5pJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D',
                  price: '$150',
                  rating: '4.7'
                },
                {
                  id: 2,
                  city: 'Lahore',
                  location: 'Badshahi Mosque',
                  country: 'Pakistan',
                  description: 'The cultural heart of Pakistan with rich Mughal heritage and delicious food.',
                  image: 'https://images.unsplash.com/photo-1622546758596-f1f06ba11f58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFob3JlfGVufDB8fDB8fHww',
                  price: '$120',
                  rating: '4.6'
                },
                {
                  id: 3,
                  city: 'Karachi',
                  location: 'Clifton Beach',
                  country: 'Pakistan',
                  description: 'The bustling metropolis with vibrant beaches and diverse culture.',
                  image: 'https://images.unsplash.com/photo-1606511490662-b2c5be7d95a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FyYWNoaXxlbnwwfHwwfHx8MA%3D%3D',
                  price: '$130',
                  rating: '4.3'
                },
                {
                  id: 4,
                  city: 'Hunza Valley',
                  location: 'Rakaposhi View',
                  country: 'Pakistan',
                  description: 'Breathtaking mountain views and the legendary hospitality of Hunza people.',
                  image: 'https://images.unsplash.com/photo-1592875146220-b769961ebe54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHVuemElMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D',
                  price: '$200',
                  rating: '4.9'
                },
                {
                  id: 5,
                  city: 'Swat Valley',
                  location: 'Malam Jabba',
                  country: 'Pakistan',
                  description: 'The Switzerland of Pakistan with lush green valleys and waterfalls.',
                  image: 'https://images.unsplash.com/photo-1624087267589-41ea77e28b1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dhdCUyMHZhbGxleXxlbnwwfHwwfHx8MA%3D%3D',
                  price: '$180',
                  rating: '4.8'
                },
                {
                  id: 6,
                  city: 'Murree',
                  location: 'Pindi Point',
                  country: 'Pakistan',
                  description: 'Popular hill station with cool climate and scenic views.',
                  image: 'https://images.unsplash.com/photo-1622988592277-e55ded3816e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVycmVlfGVufDB8fDB8fHww',
                  price: '$100',
                  rating: '4.2'
                },
                {
                  id: 7,
                  city: 'Skardu',
                  location: 'Shangrila Resort',
                  country: 'Pakistan',
                  description: 'Gateway to the world\'s highest mountains including K2.',
                  image: 'https://media.istockphoto.com/id/1318011681/photo/woman-looking-at-upper-kachura-lake-in-gilgit-baltistan.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q0mvL1ZRBRVK7a2D8rwsSiEer6FK9UtxPl-bVN8yyQM=',
                  price: '$220',
                  rating: '4.8'
                },
                {
                  id: 8,
                  city: 'Multan',
                  location: 'Shrine of Bahauddin Zakariya',
                  country: 'Pakistan',
                  description: 'City of Saints with rich Sufi heritage and mangoes.',
                  image: 'https://images.unsplash.com/photo-1600434890250-44df6e4c0d05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVsdGFufGVufDB8fDB8fHww',
                  price: '$90',
                  rating: '4.1'
                },
                {
                  id: 9,
                  city: 'Peshawar',
                  location: 'Qissa Khwani Bazaar',
                  country: 'Pakistan',
                  description: 'Ancient city with rich history and vibrant Pashtun culture.',
                  image: 'https://images.unsplash.com/photo-1720692774212-97c76d4c6d33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVzaGF3YXJ8ZW58MHx8MHx8fDA%3D',
                  price: '$110',
                  rating: '4.0'
                },
                {
                  id: 10,
                  city: 'Quetta',
                  location: 'Hanna Lake',
                  country: 'Pakistan',
                  description: 'Beautiful valley city known for its fruit orchards and mountains.',
                  image: 'https://images.unsplash.com/photo-1622592292759-329197268452?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVldHRhfGVufDB8fDB8fHww',
                  price: '$140',
                  rating: '4.2'
                },
               
                {
                  id: 11,
                  city: 'Hydrabad',
                  location: 'Qasimabad',
                  country: 'Pakistan',
                  description: 'Beatiful city with rich history and vibrant culture.',
                  image: 'https://media.istockphoto.com/id/471170455/photo/hi-tec-city-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=z0qB6HgA_zRS1n1oOL-Si6t0ND92B48jljIPYyIsDSY=',
                  price: '$100',
                  rating: '4.2'
                },
                {
                  id: 12,
                  city: 'Punjab',
                  location: 'Bahawalpur',
                  country: 'Pakistan',
                  description: 'Beautiful city known for its Weather and places.',
                  image: 'https://plus.unsplash.com/premium_photo-1697730331435-92e07494db43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVuamFifGVufDB8fDB8fHww',
                  price: '$120',
                  rating: '4.3'
                },
               
                {
                  id: 13,
                  city: 'Paris',
                  location: 'Eiffel Tower',
                  country: 'France',
                  description: 'The city of love, famous for its art, fashion, gastronomy and culture.',
                  image: 'https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8fDA%3D',
                  price: '$800',
                  rating: '4.9'
                },
                {
                  id: 14,
                  city: 'Tokyo',
                  location: 'Shibuya Crossing',
                  country: 'Japan',
                  description: 'Ultra-modern meets traditional in this vibrant, high-tech city.',
                  image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D',
                  price: '$950',
                  rating: '4.8'
                },
                {
                  id: 15,
                  city: 'New York',
                  location: 'Times Square',
                  country: 'USA',
                  description: 'The city that never sleeps, with iconic landmarks and diverse culture.',
                  image: 'https://media.istockphoto.com/id/533998713/photo/empire-state-building-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=5bB0P-APTz70wzYvKcOXCXiSRoaDaASTpjjvYdDhAbY=',
                  price: '$750',
                  rating: '4.7'
                },
                {
                  id: 16,
                  city: 'Dubai',
                  location: 'Burj Khalifa',
                  country: 'UAE',
                  description: 'Ultra-modern desert city with towering skyscrapers and luxury shopping.',
                  image: 'https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHViYWl8ZW58MHx8MHx8fDA%3D',
                  price: '$650',
                  rating: '4.6'
                },
                {
                  id: 17,
                  city: 'Bangkok',
                  location: 'Grand Palace',
                  country: 'Thailand',
                  description: 'Vibrant city known for ornate temples, street life, and bustling markets.',
                  image: 'https://images.unsplash.com/photo-1531169628939-e84f860fa5d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuZ2tva3xlbnwwfHwwfHx8MA%3D%3D',
                  price: '$450',
                  rating: '4.5'
                },
                {
                  id: 18,
                  city: 'Sydney',
                  location: 'Opera House',
                  country: 'Australia',
                  description: 'Stunning harbor city with iconic architecture and beautiful beaches.',
                  image: 'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3lkbmV5fGVufDB8fDB8fHww',
                  price: '$850',
                  rating: '4.7'
                },
                {
                  id: 19,
                  city: 'Rome',
                  location: 'Colosseum',
                  country: 'Italy',
                  description: 'The Eternal City with ancient ruins, art, and delicious cuisine.',
                  image: 'https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D',
                  price: '$700',
                  rating: '4.8'
                },
                {
                  id: 20,
                  city: 'Cape Town',
                  location: 'Table Mountain',
                  country: 'South Africa',
                  description: 'Breathtaking coastal city with stunning natural beauty.',
                  image: 'https://media.istockphoto.com/id/2066510109/photo/victoria-and-alfred-v-and-a-waterfront-lit-up-during-a-colorful-sunset-with-table-mountain-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=JTxf2GbhpAbOGuSVw1DDJfd2pu-4k0n43qyr2GZcSPg=',
                  price: '$600',
                  rating: '4.7'
                },
                {
                  id: 21,
                  city: 'Rio de Janeiro',
                  location: 'Christ the Redeemer',
                  country: 'Brazil',
                  description: 'Vibrant city famous for its carnival, beaches, and lively culture.',
                  image: 'https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UmlvJTIwZGUlMjBKYW5laXJvfGVufDB8fDB8fHww',
                  price: '$550',
                  rating: '4.6'
                },
                {
                  id: 22,
                  city: 'Bali',
                  location: 'Ubud',
                  country: 'Indonesia',
                  description: 'Tropical paradise with lush jungles, beaches, and spiritual retreats.',
                  image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D',
                  price: '$500',
                  rating: '4.8'
                },
                {
                  id: 23,
                  city: 'Bern',
                  location: 'West Central Europe',
                  country: 'Switzerland',
                  description: 'City is renowed for its natural beauty and for its mounatins , weather, and lively culture.',
                  image: 'https://images.unsplash.com/photo-1624543349832-2e70c917cc12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVybnxlbnwwfHwwfHx8MA%3D%3D',
                  price: '$580',
                  rating: '4.4'
                },
  ];

  const filteredDestinations = destinations.filter(destination => 
    destination.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    destination.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    destination.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    destination.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pakistaniDestinations = filteredDestinations.filter(dest => 
    dest.country === 'Pakistan'
  );
  
  const internationalDestinations = filteredDestinations.filter(dest => 
    dest.country !== 'Pakistan'
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} pt-24 pb-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
       
        <div className="mb-12 mx-auto max-w-3xl relative">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
            <input
              type="text"
              placeholder="Search destinations by city, country or description..."
              className={`block w-full pl-10 pr-10 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'} focus:outline-none focus:ring-2 focus:border-transparent shadow-sm transition-colors duration-300`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <FaTimes className={`h-5 w-5 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors duration-200`} />
              </button>
            )}
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl sm:tracking-tight lg:text-6xl transition-colors duration-300`}>
            Global Explorers
          </h1>
          <p className={`mt-3 max-w-2xl mx-auto text-xl ${darkMode ? 'text-gray-300' : 'text-gray-500'} sm:mt-4 transition-colors duration-300`}>
            Discover amazing destinations around the world
          </p>
        </div>

       
        {pakistaniDestinations.length > 0 && (
          <div className="mb-16">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 text-center transition-colors duration-300`}>
              Pakistani Destinations
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pakistaniDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} darkMode={darkMode} />
              ))}
            </div>
          </div>
        )}

      
        {internationalDestinations.length > 0 && (
          <div className="mb-16">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 text-center transition-colors duration-300`}>
              International Destinations
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {internationalDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} darkMode={darkMode} />
              ))}
            </div>
          </div>
        )}

       
        {filteredDestinations.length === 0 && (
          <div className={`text-center py-12 ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
            <h3 className="text-xl font-medium">No destinations found</h3>
            <p className="mt-2">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
};


const DestinationCard = ({ destination, darkMode }) => {
  return (
    <div className={`rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
      <img 
        className="w-full h-48 object-cover" 
        src={destination.image} 
        alt={destination.city} 
        loading="lazy"
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-baseline">
          <span className={`inline-block ${
            destination.country === 'Pakistan' 
              ? darkMode 
                ? 'bg-green-900 text-green-200' 
                : 'bg-green-100 text-green-800'
              : darkMode 
                ? 'bg-blue-900 text-blue-200' 
                : 'bg-blue-100 text-blue-800'
          } text-xs px-2 rounded-full uppercase font-semibold tracking-wide`}>
            {destination.country === 'Pakistan' ? 'Pakistan' : 'International'}
          </span>
          <div className={`ml-2 text-xs uppercase font-semibold tracking-wide ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {destination.location}
          </div>
        </div>
        <h4 className={`mt-2 font-semibold text-lg leading-tight truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {destination.city}
        </h4>
        <div className={`mt-1 flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <FaMapMarkerAlt className="mr-1 text-xs" />
          {destination.country}
        </div>
        <p className={`mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {destination.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {destination.price}
          </span>
          <span className="flex items-center text-yellow-500">
            <FaStar className="mr-1" />
            <span className={`ml-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {destination.rating}
            </span>
          </span>
        </div>
        <Link 
          to='/booking' 
          className={`mt-4 w-full text-center py-2 rounded-md transition duration-200 ${
            darkMode 
              ? 'bg-blue-700 text-white hover:bg-blue-600' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Venue;