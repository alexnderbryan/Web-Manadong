import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import AboutUs from './Pages/AboutUs';
import OrderNow from './Pages/OrderNow';
import GrabFood from './Pages/GrabFood';

function App() {
  return (
    <Router>
      <header className="text-white bg-[#004584] body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src="/src/assets/logo.svg" alt="Logo" className="" />
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-8 text-xl hover:text-gray-400">Home</Link>
            <Link to="/" className="mr-8 text-xl hover:text-gray-400">Eatery</Link>
            <Link to="/" className="mr-8 text-xl hover:text-gray-400">News</Link>
            <Link to="/about-us" className="mr-8 text-xl hover:text-gray-400">About Us</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/order-now" element={<OrderNow />} />
        <Route path="/grab-food" element={<GrabFood />} />
      </Routes>
    </Router>
  );
}

export default App;
