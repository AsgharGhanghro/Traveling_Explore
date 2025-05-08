import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';

const TicketBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    userAge: '',
    userNumber: '',
    destination: '',
    ticketType: '',
    travelDate: '',
    returnDate: '',
    isRoundTrip: false,
    ticketQuantity: 1,
    ticketPrice: 0,
    totalPrice: 0
  });

  useEffect(() => {
    if (location.state?.userName) {
      setFormData(prev => ({
        ...prev,
        userName: location.state.userName
      }));
    }
  }, [location.state]);

  const pakistaniCities = [
    { name: 'Karachi', basePrice: 1500 },
    { name: 'Lahore', basePrice: 1200 },
    { name: 'Islamabad', basePrice: 1000 },
    { name: 'Peshawar', basePrice: 1800 },
    { name: 'Quetta', basePrice: 2000 }
  ];

  const internationalCities = [
    { name: 'Dubai', basePrice: 25000 },
    { name: 'London', basePrice: 80000 },
    { name: 'New York', basePrice: 120000 },
    { name: 'Beijing', basePrice: 60000 },
    { name: 'Istanbul', basePrice: 45000 }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => {
      const updatedData = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      };

      if (name === 'isRoundTrip' && !checked) {
        updatedData.returnDate = '';
      }

      if (name === 'destination' || name === 'ticketQuantity') {
        const selectedCity = [...pakistaniCities, ...internationalCities].find(city => city.name === updatedData.destination);
        const price = selectedCity ? selectedCity.basePrice : 0;
        const quantity = parseInt(updatedData.ticketQuantity) || 1;
        
        updatedData.ticketPrice = price;
        updatedData.totalPrice = price * quantity;
        updatedData.ticketType = pakistaniCities.some(city => city.name === updatedData.destination) ? 'bus' : 'airplane';
      }

      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    const requiredFields = ['userName', 'userAge', 'userNumber', 'destination', 'travelDate','returnDate','totalPrice'];
    if (formData.isRoundTrip) requiredFields.push('returnDate');
    
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast.error(`Please fill all required fields: ${missingFields.join(', ')}`);
      return;
    }

   
    if (formData.isRoundTrip && new Date(formData.returnDate) <= new Date(formData.travelDate)) {
      toast.error('Return date must be after travel date');
      return;
    }

    
    if (!/^\d{10,15}$/.test(formData.userNumber)) {
      toast.error('Please enter a valid phone number (10-15 digits)');
      return;
    }

    
    if (formData.userAge < 1 || formData.userAge > 120) {
      toast.error('Please enter a valid age (1-120)');
      return;
    }

    try {
      const bookingData = {
        userName: formData.userName,
        userAge: formData.userAge,
        userNumber: formData.userNumber,
        destination: formData.destination,
        ticketType: formData.ticketType,
        travelDate: formData.travelDate,
        returnDate: formData.isRoundTrip ? formData.returnDate : null,
        isRoundTrip: formData.isRoundTrip,
        ticketQuantity: formData.ticketQuantity,
        totalPrice: formData.totalPrice,
        status: 'Pending'
      };

      const response = await fetch('http://localhost:5011/register', {
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

      navigate("/thnks", { state: { bookingData } });
      
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Error processing booking. Please try again.');
    }
  };

  const isDomestic = pakistaniCities.some(city => city.name === formData.destination);

  return (
    <div className='pt-28 pb-6'> 
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"> 
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Travel Ticket Booking</h2>
        
        <div className="mb-6 p-4 bg-white rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">Important Notice</h3>
          <p className="text-sm text-gray-700">
            <span className='font-semibold text-blue-800'>Cash payment</span> only upon arrival at the <span className='font-semibold text-blue-800'>Hydrabad Alfalah</span> terminal.
            Please bring exact change for your ticket(s).
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              readOnly={!!location.state?.userName}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age*</label>
            <input
              type="number"
              name="userAge"
              value={formData.userAge}
              onChange={handleChange}
              min="1"
              max="120"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
            <input
              type="tel"
              name="userNumber"
              value={formData.userNumber}
              onChange={handleChange}
              pattern="[0-9]{10,15}"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Destination*</label>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Destination</option>
              <optgroup label="Pakistani Cities">
                {pakistaniCities.map(city => (
                  <option key={city.name} value={city.name}>{city.name}</option>
                ))}
              </optgroup>
              <optgroup label="International Cities">
                {internationalCities.map(city => (
                  <option key={city.name} value={city.name}>{city.name}</option>
                ))}
              </optgroup>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date*</label>
            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isRoundTrip"
              name="isRoundTrip"
              checked={formData.isRoundTrip}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="isRoundTrip" className="ml-2 block text-sm text-gray-700">
              Round Trip
            </label>
          </div>

          {formData.isRoundTrip && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Return Date*</label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                min={formData.travelDate || new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={formData.isRoundTrip}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Tickets*</label>
            <select
              name="ticketQuantity"
              value={formData.ticketQuantity}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <option key={num} value={num}>{num} ticket{num !== 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          

          <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">Booking Summary</h3>
            
            <div className="grid grid-cols-2 gap-2 mb-2">
              <p className="text-gray-600">Ticket Type:</p>
              <p className="font-medium text-right">
                {isDomestic ? 'Bus Ticket' : 'Airplane Ticket'}
              </p>
            </div>
            
            {isDomestic && (
              <div className="grid grid-cols-2 gap-2 mb-2">
                <p className="text-gray-600">Departure From:</p>
                <p className="font-medium text-right">Hyderabad</p>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-2 mb-2">
              <p className="text-gray-600">Unit Price:</p>
              <p className="font-medium text-right">
                Rs. {formData.ticketPrice.toLocaleString()}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-2">
              <p className="text-gray-600">Quantity:</p>
              <p className="font-medium text-right">
                {formData.ticketQuantity}
              </p>
            </div>
            
            <div className="border-t border-gray-300 pt-2 mt-2">
              <div className="grid grid-cols-2 gap-2">
                <p className="text-gray-800 font-semibold">Total Amount:</p>
                <p className="text-green-600 font-bold text-right">
                  Rs. {formData.totalPrice}
                  
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700">
                I agree to the terms and conditions
              </label>
              <p className="text-gray-500">Payment will be collected in cash at the terminal</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 font-medium shadow-md"
          >
            Confirm Booking
          </button>
        </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default TicketBooking;