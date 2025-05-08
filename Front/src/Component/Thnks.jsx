import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ThanksPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const bookingData = state?.bookingData || {};

  return (
    <div className='pt-20'>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600">Thank you for your booking</p>
        </div>

        <div className="border-t border-b border-gray-200 py-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Booking Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Name:</span>
              <span className="font-medium">{bookingData.userName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Destination:</span>
              <span className="font-medium">{bookingData.destination}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Travel Date:</span>
              <span className="font-medium">{bookingData.travelDate}</span>
            </div>
            {bookingData.isRoundTrip && (
              <div className="flex justify-between">
                <span className="text-gray-600">Return Date:</span>
                <span className="font-medium">{bookingData.returnDate}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-600">Tickets:</span>
              <span className="font-medium">{bookingData.ticketQuantity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Amount:</span>
              <span className="font-bold text-green-600">Rs. {bookingData.totalPrice?.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/book')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          Hotel Booking
        </button>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-blue-600 mt-4 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
    </div>
  );
};

export default ThanksPage;