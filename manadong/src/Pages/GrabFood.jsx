import React from 'react';
import { Link } from 'react-router-dom';

function GrabFood() {
  return (
    <div className="bg-white flex flex-col items-center">
      <div className="w-full max-w-6xl px-5 py-5 border border-gray-300 rounded-md mb-10 mt-16">
        <Link to="/order-now" className="flex items-center text-red-500 text-lg font-semibold">
          <span className="mr-2">←</span> Back
        </Link>
        <div className="mt-2 border-t border-gray-300 pt-2">
          <p className="text-gray-600 text-sm">
            <Link to="/" className="text-blue-500 font-semibold">Home</Link> / 
            <Link to="/order-now" className="text-blue-500 font-semibold ml-1">Order Now</Link> / 
            <span className="text-gray-800 font-semibold ml-1">GrabFood Outlet</span>
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start gap-8 mb-16">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-900 mb-1">GrabFood Outlet</h1>
          <div className="border-b-2 border-red-500 w-16 mb-10"></div>
          <ul className="space-y-6">
            {["Senopati, Petogogan", "Kebun Jeruk / Tanjung Duren", "Food Plaza PIK", "Kuningan - D'Kanteen", "Bintaro, Thelapan Square", "Gading Serpong", "Cipete", "Menteng"].map((location, index) => (
              <li key={index} className="flex justify-between items-center border-b-2">
                <span className="text-gray-800 text-lg font-semibold">{location}</span>
                <Link to="#" className="text-red-500 text-lg font-semibold hover:underline">
                  Purchase Here →
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex justify-center">
          <img src="/src/assets/image 14.png" alt="Manadong Dish" className="w-full h-auto object-cover mt-24"/>
        </div>
      </div>

      <footer className="bg-[#004584] text-white py-10 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img src="/src/assets/logo.svg" alt="Manadong Logo" className="mb-4 w-40" />
          <p className="text-sm text-center md:text-left">
            Copyright © 2023 PT Bogadong Anugerah Indonesia
          </p>
        </div>

        <div className="text-center md:text-left mb-8 md:mb-0">
          <h4 className="font-semibold text-xl mb-4">Contact Us</h4>
          <p className="text-lg mb-4 font-semibold">Email: <a href="mailto:Manadong@gmail.com" className="underline mb-4 font-normal">Manadong@gmail.com</a></p>
          <p className="text-lg mb-4 font-semibold">Telp: <a href="tel:+628111000115" className="underline mb-4 font-normal">+62-811-1000-115</a></p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4 ml-28">
            <a href="#"><img src="/src/assets/wa.svg" alt="WhatsApp" className="w-7 h-7" /></a> 
            <a href="#"><img src="/src/assets/facebook.svg" alt="Facebook" className="w-7 h-7" /></a> 
            <a href="#"><img src="/src/assets/instagram.svg" alt="Instagram" className="w-7 h-7" /></a>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-semibold text-xl mb-4">Available On</h4>
          <ul className="space-y-2">
            <li><a href="#" className="underline text-lg">Grab Food</a></li>
            <li><a href="#" className="underline text-lg">GoFood</a></li>
            <li><a href="#" className="underline text-lg">Shopee Food</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default GrabFood;
