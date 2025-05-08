import React, { useState } from 'react';
import Footer from '../Pages/Footer';
import { Link } from 'react-router-dom';

const TransportationPage = () => {
  const [filter, setFilter] = useState('all'); 

  const busOptions = [
    {
      id: 1,
      type: 'bus',
      name: 'Karachi Express',
      departure: 'Lahore',
      arrival: 'Karachi',
      departureTime: '08:00 AM',
      arrivalTime: '06:00 PM',
      duration: '10 hours',
      price: 'Rs. 2,500',
      amenities: ['AC', 'WiFi', 'TV', 'Refreshments'],
      image: 'https://plus.unsplash.com/premium_photo-1664302152991-d013ff125f3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzfGVufDB8fDB8fHww'
    },
    {
      id: 2,
      type: 'bus',
      name: 'Islamabad Deluxe',
      departure: 'Karachi',
      arrival: 'Islamabad',
      departureTime: '10:00 PM',
      arrivalTime: '06:00 AM',
      duration: '8 hours',
      price: 'Rs. 3,000',
      amenities: ['AC', 'WiFi', 'Reclining Seats', 'Charging Ports'],
      image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww'
    },
    {
      id: 3,
      type: 'bus',
      name: 'Peshawar Travels',
      departure: 'Islamabad',
      arrival: 'Peshawar',
      departureTime: '07:00 AM',
      arrivalTime: '11:00 AM',
      duration: '4 hours',
      price: 'Rs. 1,500',
      amenities: ['AC', 'Comfortable Seating'],
      image: 'https://images.unsplash.com/photo-1564694202883-46e7448c1b26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzfGVufDB8fDB8fHww'
    },
    {
      id: 4,
      type: 'bus',
      name: 'Quetta Link',
      departure: 'Karachi',
      arrival: 'Quetta',
      departureTime: '09:00 PM',
      arrivalTime: '07:00 AM',
      duration: '10 hours',
      price: 'Rs. 2,800',
      amenities: ['AC', 'WiFi', 'Blankets'],
      image: 'https://images.unsplash.com/photo-1569448096483-1114dddb646d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 5,
      type: 'bus',
      name: 'Multan Express',
      departure: 'Lahore',
      arrival: 'Multan',
      departureTime: '02:00 PM',
      arrivalTime: '06:00 PM',
      duration: '4 hours',
      price: 'Rs. 1,200',
      amenities: ['AC', 'Snacks'],
      image: 'https://media.istockphoto.com/id/2188914526/photo/electric-bus-at-a-stop-is-charged-by-pantograph-wind-turbines-on-the-horizon.webp?a=1&b=1&s=612x612&w=0&k=20&c=G6yN2ptSNc_qC243Dyx_-JRwhu2b_KmaDBo9-9_5bgM='
    },
    {
      id: 6,
      type: 'bus',
      name: 'Faisalabad Shuttle',
      departure: 'Islamabad',
      arrival: 'Faisalabad',
      departureTime: '08:30 AM',
      arrivalTime: '01:30 PM',
      duration: '5 hours',
      price: 'Rs. 1,800',
      amenities: ['AC', 'Reading Lights'],
      image: 'https://media.istockphoto.com/id/2161036620/photo/intercity-passenger-bus-driving-on-highway-road-in-evening.webp?a=1&b=1&s=612x612&w=0&k=20&c=RZxot05MXqecnmWoTo9dCruecXkobl-xN3rT9fCUaWw='
    }
  ];

  const airplaneOptions = [
    {
      id: 7,
      type: 'airplane',
      name: 'Emirates',
      departure: 'Karachi',
      arrival: 'Dubai',
      departureTime: '02:00 AM',
      arrivalTime: '04:30 AM',
      duration: '2.5 hours',
      price: 'Rs. 45,000',
      amenities: ['In-flight Meal', 'Entertainment', '30kg Luggage'],
      image: 'https://media.istockphoto.com/id/2149783756/photo/airplane-glides-over-tropical-palms.webp?a=1&b=1&s=612x612&w=0&k=20&c=-1LKXN9qSzMl8o9NqBLnaWmhprav7l-x6DZXfr1bjjI='
    },
    {
      id: 8,
      type: 'airplane',
      name: 'British Airways',
      departure: 'Lahore',
      arrival: 'London',
      departureTime: '10:00 PM',
      arrivalTime: '06:00 AM',
      duration: '8 hours',
      price: 'Rs. 85,000',
      amenities: ['In-flight Meal', 'Entertainment', '40kg Luggage', 'Priority Boarding'],
      image: 'https://media.istockphoto.com/id/1808395290/photo/flying-above-the-clouds-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=3NnoBBRHpivxBAKCWIeP03aIS7017CJhvm-DKySzdPE='
    },
    {
      id: 9,
      type: 'airplane',
      name: 'Qatar Airways',
      departure: 'Islamabad',
      arrival: 'Doha',
      departureTime: '03:00 AM',
      arrivalTime: '05:30 AM',
      duration: '2.5 hours',
      price: 'Rs. 50,000',
      amenities: ['In-flight Meal', 'Entertainment', '35kg Luggage'],
      image: 'https://media.istockphoto.com/id/2150678874/photo/young-woman-boarding-an-airplane.webp?a=1&b=1&s=612x612&w=0&k=20&c=nt-L6jsYIFNFiIwi3fXjVwuIrAC6xn2-jaWjvKrIL4A='
    },
    {
      id: 10,
      type: 'airplane',
      name: 'Turkish Airlines',
      departure: 'Karachi',
      arrival: 'Istanbul',
      departureTime: '01:00 PM',
      arrivalTime: '06:00 PM',
      duration: '5 hours',
      price: 'Rs. 65,000',
      amenities: ['In-flight Meal', 'Entertainment', '30kg Luggage', 'WiFi'],
      image: 'https://plus.unsplash.com/premium_photo-1679758630312-a3d601c411d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyb3BsYW5lfGVufDB8fDB8fHww'
    },
    {
      id: 11,
      type: 'airplane',
      name: 'Air China',
      departure: 'Lahore',
      arrival: 'Beijing',
      departureTime: '08:00 AM',
      arrivalTime: '04:00 PM',
      duration: '8 hours',
      price: 'Rs. 70,000',
      amenities: ['In-flight Meal', 'Entertainment', '25kg Luggage'],
      image: 'https://images.unsplash.com/photo-1628964176903-c85e9389ab84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFpcm9wbGFuZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 12,
      type: 'airplane',
      name: 'Singapore Airlines',
      departure: 'Islamabad',
      arrival: 'Singapore',
      departureTime: '11:00 PM',
      arrivalTime: '08:00 AM',
      duration: '9 hours',
      price: 'Rs. 95,000',
      amenities: ['In-flight Meal', 'Entertainment', '40kg Luggage', 'Premium Seats'],
      image: 'https://plus.unsplash.com/premium_photo-1679830513869-cd3648acb1db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFpcm9wbGFuZXxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  const allOptions = [...busOptions, ...airplaneOptions];

  const filteredOptions = filter === 'all' 
    ? allOptions 
    : filter === 'bus' 
      ? busOptions 
      : airplaneOptions;

  return (
    <>
    <div className='pt-16'>
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Transportation Options</h1>
          <p className="text-lg text-gray-600">Choose your preferred travel method</p>
        </div>

      
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
          >
            All Options
          </button>
          <button
            onClick={() => setFilter('bus')}
            className={`px-6 py-2 rounded-full font-medium ${filter === 'bus' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
          >
            Buses (Pakistan)
          </button>
          <button
            onClick={() => setFilter('airplane')}
            className={`px-6 py-2 rounded-full font-medium ${filter === 'airplane' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
          >
            Airplanes (International)
          </button>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOptions.map((option) => (
            <div key={option.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-40 bg-gray-200 overflow-hidden">
                <img src={option.image} alt={option.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-800">{option.name}</h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${option.type === 'bus' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {option.type === 'bus' ? 'Bus' : 'Airplane'}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center text-gray-600 mb-1">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{option.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{option.departure} → {option.arrival}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">{option.price}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Departure: {option.departureTime}</h3>
                  <h3 className="text-sm font-semibold text-gray-700">Arrival: {option.arrivalTime}</h3>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {option.amenities.map((amenity, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to='/booking' className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200 font-medium">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default TransportationPage;