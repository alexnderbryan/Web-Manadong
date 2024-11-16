import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Promotion from '../Components/promotion';
import Reviews from '../Components/reviews';
import Locations from '../Components/locations';
import Footer from '../Components/footer';

const menuItems = [
  { name: 'Ayam Rica', image: '/src/assets/ayam rica.png', label: 'New', description: 'Spicy and flavorful chicken dish.', price: 'Rp. 35,000' },
  { name: 'Cumi Hitam', image: '/src/assets/cumi hitam.png', label: '', description: 'Squid in black sauce with corn fritters.', price: 'Rp. 40,000' },
  { name: 'Cakalang Tinorasak', image: '/src/assets/cakalang tinorasak.png', label: '', description: 'Traditional cakalang dish.', price: 'Rp. 38,000' },
  { name: 'Perkedel Jagung', image: '/src/assets/perkedel jagung.png', label: '', description: 'Corn fritters, crispy and delicious.', price: 'Rp. 15,000' },
  { name: 'Ayam Woku', image: '/src/assets/ayam woku.png', label: '', description: 'Spicy Manado-style chicken.', price: 'Rp. 37,000' },
  { name: 'Lauk Frozen', image: '/src/assets/lauk frozen.png', label: '', description: 'Frozen Manado-style side dishes.', price: 'Rp. 50,000' },
  { name: 'Cakalang Rabe', image: '/src/assets/cakalang rabe.png', label: '', description: 'Spicy and savory cakalang fish.', price: 'Rp. 39,000' },
];

function Homepage() {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="bg-pink-100 h-screen flex">
        <div className="mx-auto flex flex-col md:flex-row items-center h-full">
          <div className="md:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-6xl font-bold text-red-600 mb-4 ml-4">Manadong</h1>
            <p className="text-gray-700 text-3xl mb-10 ml-4">
              is a Manado dish with a spicy and appetizing flavour.
            </p>
            <p className="text-red-600 font-semibold text-3xl mb-10 ml-4">
              #NikmatnyaGaPakeRibet
            </p>
            <button
              onClick={() => navigate('/order-now')}
              className="border-2 border-blue-500 text-blue-500 px-6 py-4 ml-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Order Now
            </button>
          </div>
          <div className="md:w-full h-full">
            <div className='w-full h-full'>
              <img src="/src/assets/image 14.png" alt="Manadong Dishes" className="object-cover h-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white min-h-screen p-24">
        <h2 className="text-4xl font-semibold text-blue-600 mb-2">Our Menu</h2>
        <div className="border-b-4 border-red-500 w-16 mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(item)}>
              <img src={item.image} alt={item.name} className="w-full h-100 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                {item.label && <span className="text-red-500 text-sm font-bold">{item.label}</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
        <button
              onClick={() => navigate('/order-now')}
              className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
              Order Now
        </button>
        </div>
      </div>
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/5 h-auto relative">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700 transition duration-300 bg-white rounded-full p-2 shadow-lg w-6 h-6 flex items-center justify-center"
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-96 object-cover mb-4" />
            <h3 className="text-3xl font-bold mb-2 ml-4">{selectedItem.name}</h3>
            <p className="text-gray-700 text-lg mb-4 ml-4">{selectedItem.description}</p>
            <p className="text-red-600 font-bold text-lg ml-4 pb-6">{selectedItem.price}</p>
          </div>
        </div>
      )}

      <Promotion />
      <Reviews />
      <Locations />
      <Footer />
    </div>
  );
}

export default Homepage;
