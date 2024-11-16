import React from 'react';
import { Link } from 'react-router-dom';

function OrderNow() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="w-full max-w-6xl px-5 py-5 border border-gray-300 rounded-md mb-10 mt-16">
        <Link to="/" className="flex items-center text-red-500 text-lg font-semibold">
          <span className="mr-2">←</span> Back
        </Link>
        <div className="mt-2 border-t border-gray-300 pt-2">
          <p className="text-gray-600 text-sm">
            <Link to="/" className="text-blue-500 font-semibold">Home</Link> / 
            <Link to="/order-now" className="text-gray-800 font-semibold ml-1">Order Now</Link>
          </p>
        </div>
      </div>

      <div>
      <h1 className="text-4xl font-semibold text-blue-900 mt-5 mb-2">Order Now On :</h1>
      <div className="border-b-4 border-red-500 w-16 mb-20"></div>
      </div>

      <div className="flex justify-center items-center space-x-52 mb-32">
        <div className="flex flex-col items-center">
          <img src="/src/assets/grab.png" alt="GrabFood" className="w-52 h-52 mb-10" />
          <a href="grab-food">
          <button className="bg-[#004584] font-semibold text-xl text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-36 h-14">
            Order Now
          </button>
          </a>
        </div>

        <div className="flex flex-col items-center">
          <img src="/src/assets/gofood.png" alt="GoFood" className="w-52 h-52 mb-10" />
          <button
          className="bg-[#004584] font-semibold text-xl text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-36 h-14">
            Order Now
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img src="/src/assets/shopee.png" alt="Shopee Food" className="w-52 h-52 mb-10" />
          <button className="bg-[#004584] font-semibold text-xl text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-36 h-14">
            Order Now
          </button>
        </div>
      </div>

      <footer className="bg-[#004584] text-white w-full py-10 mt-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <img src="/src/assets/logo.svg" alt="Manadong Logo" className="mb-4 w-40" />
            <p className="text-sm text-center md:text-left">
              Copyright © 2023 PT Bogadong Anugerah Indonesia
            </p>
          </div>
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h4 className="font-semibold text-xl mb-4">Contact Us</h4>
            <p className="text-lg mb-4 font-semibold">Email: <a href="mailto:Manadong@gmail.com" className="underline font-normal">Manadong@gmail.com</a></p>
            <p className="text-lg mb-4 font-semibold">Telp: <a href="tel:+628111000115" className="underline font-normal">+62-811-1000-115</a></p>
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

export default OrderNow;
