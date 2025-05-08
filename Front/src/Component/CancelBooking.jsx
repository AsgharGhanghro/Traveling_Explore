// CancelBooking.js
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CancelBooking = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [canceledBookings, setCanceledBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5011/bookings');
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        const data = await response.json();
        setBookings(data.filter(booking => booking.status !== 'Canceled'));
        setCanceledBookings(data.filter(booking => booking.status === 'Canceled'));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        toast.error('Failed to load bookings');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleCancel = async (bookingId, userName) => {
    if (!window.confirm(`Are you sure you want to cancel ${userName}'s booking?`)) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5011/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'Canceled' }),
      });

      if (!response.ok) {
        throw new Error('Failed to cancel booking');
      }

      // Update the state to reflect the cancellation
      const updatedBookings = bookings.filter(booking => booking._id !== bookingId);
      const canceledBooking = bookings.find(booking => booking._id === bookingId);
      
      setBookings(updatedBookings);
      setCanceledBookings(prev => [...prev, { ...canceledBooking, status: 'Canceled' }]);
      
      toast.success(`Booking for ${userName} has been canceled successfully`);
    } catch (error) {
      console.error('Error canceling booking:', error);
      toast.error('Failed to cancel booking');
    }
  };

  const filteredBookings = bookings.filter(booking =>
    booking.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.userNumber.includes(searchTerm)
  );

  if (loading) {
    return (
      <div className="pt-28 pb-6 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-6">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Cancel Bookings</h2>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name, destination, or phone number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Active Bookings</h3>
          {filteredBookings.length === 0 ? (
            <p className="text-gray-500">No active bookings found</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Destination</th>
                    <th className="py-2 px-4 border-b">Travel Date</th>
                    <th className="py-2 px-4 border-b">Total Price</th>
                    <th className="py-2 px-4 border-b">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr key={booking._id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b text-center">{booking.userName}</td>
                      <td className="py-2 px-4 border-b text-center">{booking.destination}</td>
                      <td className="py-2 px-4 border-b text-center">
                        {new Date(booking.travelDate).toLocaleDateString()}
                      </td>
                      <td className="py-2 px-4 border-b text-center">Rs. {booking.totalPrice}</td>
                      <td className="py-2 px-4 border-b text-center">
                        <button
                          onClick={() => handleCancel(booking._id, booking.userName)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Canceled Bookings</h3>
          {canceledBookings.length === 0 ? (
            <p className="text-gray-500">No canceled bookings</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Destination</th>
                    <th className="py-2 px-4 border-b">Travel Date</th>
                    <th className="py-2 px-4 border-b">Total Price</th>
                    <th className="py-2 px-4 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {canceledBookings.map((booking) => (
                    <tr key={booking._id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b text-center">{booking.userName}</td>
                      <td className="py-2 px-4 border-b text-center">{booking.destination}</td>
                      <td className="py-2 px-4 border-b text-center">
                        {new Date(booking.travelDate).toLocaleDateString()}
                      </td>
                      <td className="py-2 px-4 border-b text-center">Rs. {booking.totalPrice}</td>
                      <td className="py-2 px-4 border-b text-center text-red-500 font-semibold">
                        Canceled
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="mt-6">
          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Back to Home
          </button>
        </div>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default CancelBooking;