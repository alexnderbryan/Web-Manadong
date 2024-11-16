import React from 'react';

function Footer() {
  return (
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
  );
}

export default Footer;
