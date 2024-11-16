import React from 'react'

function AboutUs() {
  return (
    <div>
        <div className="w-auto text-left mb-14 mt-16 ml-48">
          <h2 className="text-4xl font-bold text-blue-600">About Us</h2>
          <div className="border-b-4 border-red-500 w-16"></div>
        </div>

      <div className="bg-white flex items-start justify-center p-4 md:p-0 mb-12">
        <div className="container mx-auto flex flex-col md:flex-row ">
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            <img
              src="/src/assets/image 14.png" // Ganti dengan jalur gambar Anda
              alt="Manadong Dishes"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="md:w-1/2 w-full md:pl-8">
            <h2 className="text-4xl font-bold mb-4">About Our Company</h2>
            <p className="text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-[#004584] text-white py-10">
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
  )
}

export default AboutUs