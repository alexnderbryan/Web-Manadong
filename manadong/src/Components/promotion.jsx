import React from 'react';

const promotions = [
  {
    title: 'Buy 2 Get 1',
    description: 'Buy 2 and get 1 free, applicable to select variants.',
    image: '/src/assets/buyget.png',
  },
  {
    title: 'Discount 20%',
    description:
      'Get a 20% discount on all purchases this weekend. Minimum purchase Rp. 50,000.',
    image: '/src/assets/diskon.png',
  },
  {
    title: 'Bundle Deal',
    description:
      'Purchase Ayam Woku and Ayam Rica and save 30% on the total cost.',
    image: '/src/assets/hotdeal.png',
  },
];

function Promotion() {
  return (
    <div className="bg-pink-100 h-full w-full p-8 md:p-16 flex flex-col md:flex-row">
      <div className="w-1/4 pr-8">
        <div className='my-auto w-full h-full flex flex-col justify-center'>
            <h2 className="text-left text-4xl font-bold text-blue-600 mb-2">Promotion</h2>
            <div className="border-b-4 border-red-500 w-16 mb-8"></div>
        </div>
      </div>
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {promotions.map((promo, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 w-full text-center"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600 text-left mb-2">
              {promo.title}
            </h3>
            <p className="text-gray-700 text-left">{promo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Promotion;
