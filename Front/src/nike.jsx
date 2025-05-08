import React from 'react'
import './App.css';
import Home from './Website/Page2.0/Home';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './Website/Page2.0/Navbar';
import Footer from './Website/Page2.0/Footer';
import Products from './Website/Component2.0/Products';
import Services from './Website/Component2.0/Services';
import Contacts from './Website/Component2.0/Contacts';
import Reviews from './Website/Component2.0/Reviews';
import Abouts from './Website/Component2.0/Abouts';


const App = () => {
  return (
    <div className='overflow-x-clip'>
     
       <Navbar />
      <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/products" element={<Products/>} />
      <Route  path="/services" element={<Services/>} />
      <Route  path="/contacts" element={<Contacts/>} />
      <Route  path="/reviews" element={<Reviews/>} />
      <Route  path="/abouts" element={<Abouts/>} />
     </Routes>
     <Footer />
    
    </div>
  )
}

export default App;

