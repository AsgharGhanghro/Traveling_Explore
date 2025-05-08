import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const HotelBookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    roomType: 'deluxe',
    specialRequests: '',
    paymentMethod: 'Pay at Hotel',
    termsAccepted: false,
    
  });

  const roomTypes = [
    { id: 'deluxe', name: 'Deluxe Room', price: 50 },
    { id: 'executive', name: 'Executive Suite', price: 70 },
    { id: 'presidential', name: 'Presidential Suite', price: 100 },
    { id: 'penthouse', name: 'Penthouse', price: 150 }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const diffTime = new Date(formData.checkOut) - new Date(formData.checkIn);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const calculateTotal = () => {
    const selectedRoom = roomTypes.find(room => room.id === formData.roomType);
    if (!selectedRoom) return 0;
    return calculateNights() * selectedRoom.price;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.checkIn || 
        !formData.checkOut || !formData.termsAccepted ) {
      toast.error('Please fill all required fields');
      return;
    }

  
    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      toast.error('Check-out date must be after check-in date');
      return;
    }

    try {
      const bookingData = {
        ...formData,
        nights: calculateNights(),
        total: calculateTotal()
      };

      const response = await fetch('http://localhost:5011/hotel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
        
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Booking failed');
      }

      navigate("/", { state: { bookingData } });
      
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Error processing booking. Please try again.');
    }
  };

  const nights = calculateNights();
  const total = calculateTotal();

  return (
    <div className='pt-16'>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-800 to-indigo-900 p-6 text-white">
              <h1 className="text-3xl font-bold">Luxury Grand Hotel</h1>
              <p className="mt-2 opacity-90">Book your 5-star experience</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Booking Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
                      Check-in Date *
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
                      Check-out Date *
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      min={formData.checkIn || new Date().toISOString().split('T')[0]}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">
                      Adults *
                    </label>
                    <select
                      id="adults"
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">
                      Children
                    </label>
                    <select
                      id="children"
                      name="children"
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {[0, 1, 2, 3, 4, 5, 6, 7].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

             
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Room Selection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {roomTypes.map(room => (
                    <div key={room.id} className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-100 p-4">
                        <h3 className="font-medium text-gray-800">{room.name}</h3>
                        <p className="text-blue-600 font-bold mt-1">${room.price}/night</p>
                      </div>
                      <div className="p-4">
                        <input
                          type="radio"
                          id={room.id}
                          name="roomType"
                          value={room.id}
                          checked={formData.roomType === room.id}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={room.id} className="ml-2 text-sm text-gray-700">
                          Select
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            
              <div className="md:col-span-2">
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Any special requirements or preferences..."
                />
              </div>

             
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <input
                      type="radio"
                      id="credit"
                      name="paymentMethod"
                      value="Credit Card"
                      checked={formData.paymentMethod === 'Credit Card'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="credit" className="ml-2 font-medium text-gray-700">
                      Credit Card
                    </label>
                  </div>
                  <div className="border rounded-lg p-4">
                    <input
                      type="radio"
                      id="paypal"
                      name="paymentMethod"
                      value="PayPal"
                      checked={formData.paymentMethod === 'PayPal'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="paypal" className="ml-2 font-medium text-gray-700">
                      PayPal
                    </label>
                  </div>
                  <div className="border rounded-lg p-4">
                    <input
                      type="radio"
                      id="hotel"
                      name="paymentMethod"
                      value="Pay at Hotel"
                      checked={formData.paymentMethod === 'Pay at Hotel'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="hotel" className="ml-2 font-medium text-gray-700">
                      Pay at Hotel
                    </label>
                  </div>
                </div>
              </div>

             
              <div className="md:col-span-2 flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="termsAccepted"
                    name="termsAccepted"
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="termsAccepted" className="font-medium text-gray-700">
                    I agree to the terms and conditions *
                  </label>
                  <p className="text-gray-500">Your personal data will be used to process your booking and for no other purposes.</p>
                </div>
              </div>

            
              <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Booking Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Room Type:</span>
                    <span className="font-medium">
                      {roomTypes.find(r => r.id === formData.roomType)?.name || 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">
                      {nights} night{nights !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Guests:</span>
                    <span className="font-medium">
                      {formData.adults} adult{formData.adults !== 1 ? 's' : ''}
                      {formData.children > 0 && `, ${formData.children} child${formData.children !== 1 ? 'ren' : ''}`}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-xl font-bold text-blue-600">${total}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!formData.termsAccepted}
                  className={`mt-6 w-full py-3 px-4 rounded-md text-white font-bold shadow-md transition duration-200 ${
                    formData.termsAccepted
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default HotelBookingForm;