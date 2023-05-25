import React from 'react'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import Navbar1 from './components/Navbar1.jsx';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
       <Navbar1/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />

       </Routes>
      
    </div>
  )
}
