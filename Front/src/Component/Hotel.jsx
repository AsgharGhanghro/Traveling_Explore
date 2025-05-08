import { useState } from 'react';
import { FaStar, FaWifi, FaSwimmingPool, FaUtensils, FaParking } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { MdMeetingRoom, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Footer from '../Pages/Footer';

const hotels = [
  {
    id: 1,
    name: "Serena Hotel Islamabad",
    location: "Islamabad, Pakistan",
    rating: 4.8,
    type: "5-Star Luxury",
    description: "Luxurious hotel with breathtaking views of the Margalla Hills, offering world-class amenities and services.",
    image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
    featured: true,
    rooms: [
      { type: "Deluxe Room", price: "$50/night", amenities: ["King bed", "Mountain view", "Free WiFi"] },
      { type: "Executive Suite", price: "$80/night", amenities: ["Separate living area", "Butler service", "Private balcony"] }
    ],
    staff: "Multilingual professional staff available 24/7",
    facilities: ["Outdoor pool", "Spa & wellness center", "3 restaurants", "Business center"],
    country: "Pakistan"
  },
  {
    id: 2,
    name: "Pearl Continental Karachi",
    location: "Karachi, Pakistan",
    rating: 4.5,
    type: "5-Star Business",
    description: "Premier business hotel in the heart of Karachi with excellent conference facilities.",
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww",
    featured: false,
    rooms: [
      { type: "Superior Room", price: "$50/night", amenities: ["City view", "Work desk", "Mini bar"] },
      { type: "Club Floor Room", price: "$100/night", amenities: ["Executive lounge access", "Complimentary breakfast"] }
    ],
    staff: "Highly trained hospitality professionals",
    facilities: ["Fitness center", "Multiple dining options", "Banquet halls"],
    country: "Pakistan"
  },
  {
    id: 3,
    name: "Burj Al Arab",
    location: "Dubai, UAE",
    rating: 5.0,
    type: "7-Star Luxury",
    description: "The world's most luxurious hotel, standing on an artificial island and offering unmatched opulence.",
    image: "https://images.unsplash.com/photo-1724947053227-2335bf21d0ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww",
    featured: false,
    rooms: [
      { type: "Deluxe Suite", price: "$100/night", amenities: ["Private butler", "Marble bathroom", "Panoramic views"] },
      { type: "Royal Suite", price: "$200/night", amenities: ["Cinema room", "Private elevator", "24k gold iPad"] }
    ],
    staff: "Dedicated butler for each suite",
    facilities: ["Helipad", "Luxury spa", "Fine dining restaurants", "Private beach"],
    country: "UAE"
  },
  {
    id: 4,
    name: "Marriott Hotel Lahore",
    location: "Lahore, Pakistan",
    rating: 4.6,
    type: "5-Star",
    description: "Modern hotel with excellent facilities located in the cultural heart of Lahore.",
    image: "https://images.unsplash.com/photo-1723119832675-0031e0f0408c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww",
    featured: false,
    rooms: [
      { type: "Standard Room", price: "$50/night", amenities: ["Comfortable bedding", "High-speed internet"] },
      { type: "Executive Suite", price: "$70/night", amenities: ["Separate living area", "Club lounge access"] }
    ],
    staff: "Friendly and professional service team",
    facilities: ["Swimming pool", "Business center", "All-day dining"],
    country: "Pakistan"
  }
];

const HotelCard = ({ hotel, isFeatured, onClick }) => {
  return (
   
    <div 
      className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer ${isFeatured ? 'bg-white' : 'bg-gray-50'}`}
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className={`w-full object-cover ${isFeatured ? 'h-80' : 'h-48'}`}
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center">
          <FaStar className="mr-1" />
          {hotel.rating}
        </div>
      </div>
      <div className={`p-6 ${isFeatured ? '' : 'h-48 overflow-hidden'}`}>
        <div className="flex justify-between items-start">
          <h3 className={`font-bold ${isFeatured ? 'text-2xl' : 'text-xl'} text-gray-800`}>{hotel.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{hotel.type}</span>
        </div>
        <p className="text-gray-600 flex items-center mt-1">
          <MdLocationOn className="mr-1" />
          {hotel.location}
        </p>
        <p className="text-gray-700 mt-3">{hotel.description}</p>
        {isFeatured && (
          <div className="mt-4 flex flex-wrap gap-2">
            {hotel.facilities.slice(0, 4).map((facility, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                {facility}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const HotelDetail = ({ hotel, onClose }) => {
  return (
   
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img src={hotel.image} alt={hotel.name} className="w-full h-96 object-cover" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-xl py-2 px-3 shadow-lg"
          >
            ✕
          </button>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{hotel.name}</h1>
              <p className="text-gray-600 flex items-center mt-2">
                <MdLocationOn className="mr-1" />
                {hotel.location}
              </p>
            </div>
            <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-lg">
              <FaStar className="mr-1" />
              <span className="font-bold">{hotel.rating}</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-gray-700">{hotel.description}</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Rooms & Rates</h2>
              <div className="space-y-4">
                {hotel.rooms.map((room, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{room.type}</h3>
                      <span className="text-blue-600 font-bold">{room.price}</span>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {room.amenities.map((amenity, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Facilities</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <FaWifi className="text-blue-500 mr-2" />
                  <span>Free WiFi</span>
                </div>
                <div className="flex items-center">
                  <FaSwimmingPool className="text-blue-500 mr-2" />
                  <span>Swimming Pool</span>
                </div>
                <div className="flex items-center">
                  <FaUtensils className="text-blue-500 mr-2" />
                  <span>Restaurant</span>
                </div>
                <div className="flex items-center">
                  <FaParking className="text-blue-500 mr-2" />
                  <span>Parking</span>
                </div>
                {hotel.facilities.includes('Spa & wellness center') && (
                  <div className="flex items-center">
                    <IoIosPeople className="text-blue-500 mr-2" />
                    <span>Spa</span>
                  </div>
                )}
                <div className="flex items-center">
                  <MdMeetingRoom className="text-blue-500 mr-2" />
                  <span>Meeting Rooms</span>
                </div>
              </div>

              <h2 className="text-xl font-semibold mt-8 mb-4">Staff & Services</h2>
              <p className="text-gray-700">{hotel.staff}</p>
               
               <div className='mt-7 '>
              <Link to='/book' className=" w-full bg-blue-600 px-3 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                Book Now
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

const HotelsPage = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredHotels = filter === 'all' 
    ? hotels 
    : hotels.filter(hotel => 
        filter === 'pakistan' ? hotel.country === 'Pakistan' : hotel.country !== 'Pakistan'
      );

  const featuredHotel = filteredHotels.find(hotel => hotel.featured) || filteredHotels[0];
  const otherHotels = filteredHotels.filter(hotel => hotel.id !== featuredHotel.id);

  return (
    <>
    <div className='pt-20'>
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Luxury Hotels Collection</h1>
        <p className="text-lg text-gray-600 text-center mb-12">Discover the finest accommodations for your next journey</p>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              All Hotels
            </button>
            <button
              onClick={() => setFilter('pakistan')}
              className={`px-4 py-2 text-sm font-medium ${filter === 'pakistan' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Pakistan
            </button>
            <button
              onClick={() => setFilter('international')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${filter === 'international' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              International
            </button>
          </div>
        </div>

        {featuredHotel && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Hotel</h2>
            <HotelCard 
              hotel={featuredHotel} 
              isFeatured={true} 
              onClick={() => setSelectedHotel(featuredHotel)}
            />
          </div>
        )}

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Other Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherHotels.map(hotel => (
            <HotelCard 
              key={hotel.id} 
              hotel={hotel} 
              isFeatured={false} 
              onClick={() => setSelectedHotel(hotel)}
            />
          ))}
        </div>
      </div>

      {selectedHotel && (
        <HotelDetail 
          hotel={selectedHotel} 
          onClose={() => setSelectedHotel(null)}
        />
      )}
    </div>
    </div>
    <Footer />
    </>
  );
};

export default HotelsPage;