import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Gallery from './Component/Gallery';
import Serve from './Component/Serve';
import About from './Component/About';
import SignUp from './Component/SignUp';
import Hotel from './Component/Hotel';
import Contact from './Component/Contact';
import Book from './Component/Book';
import FliBus from './Component/FliBus';
import Venue from './Component/Venue';
import Booking from './Component/Booking';
import CancelBooking from './Component/CancelBooking';
import Thnks from './Component/Thnks';
import { ThemeProvider } from './Component/theme';

function App() {
  return (
    <ThemeProvider>
      <div className=" bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/serve" element={<Serve />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/about" element={<About />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/flibus" element={<FliBus />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/cancel" element={<CancelBooking />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/thnks" element={<Thnks />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;


