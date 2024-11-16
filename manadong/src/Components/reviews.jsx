import React, { useState } from "react";

const reviews = [
  {
    name: "Jennifer",
    review: "Such a good value for your money. Really good Manadonese food. Well recommended!",
  },
  {
    name: "A******a",
    review: "Cakalangnya terbaikkkkkkkkkk, the best cakalang everrr!",
  },
  {
    name: "Nadia",
    review:
      "Dari semua menu manadong, ini kesukaan suami saya. Ngebantu gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESS.. beres deh tanggung jawab",
  },
  {
    name: "Michael",
    review: "Fantastic taste and very authentic! Will definitely order again.",
  },
  {
    name: "Sarah",
    review: "The best Manado food I’ve ever had. Highly recommend!",
  },
  {
    name: "Tom",
    review: "Perfect for a quick and delicious meal. Great flavors!",
  },
  {
    name: "William",
    review: "Fantastic taste and very authentic! Will definitely order again.",
  },
  {
    name: "Asep",
    review: "The best Manado food I’ve ever had. Highly recommend!",
  },
  {
    name: "Andre",
    review: "Perfect for a quick and delicious meal. Great flavors!",
  },
  {
    name: "Vincent",
    review: "Fantastic taste and very authentic! Will definitely order again.",
  },
  {
    name: "Govinda",
    review: "The best Manado food I’ve ever had. Highly recommend!",
  },
  {
    name: "Rizky",
    review: "Perfect for a quick and delicious meal. Great flavors!",
  },
];

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 3 + reviews.length) % reviews.length
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-blue-200 w-full p-8 md:p-16 flex flex-col items-center">
      <div className="w-full text-left mb-8">
        <h2 className="text-4xl font-bold text-blue-600 mb-2">Reviews</h2>
        <div className="border-b-4 border-red-500 w-16"></div>
      </div>

      <div className="relative w-full max-w-6xl">
        <div className="flex justify-center space-x-4 overflow-hidden">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 w-full flex flex-col justify-between"
            >
              <div className="flex items-start">
                <span className="text-yellow-500 text-4xl mr-2">“</span>
                <div>
                  <h4 className="text-blue-600 font-bold mb-2">{review.name}</h4>
                  <p className="text-gray-700">{review.review}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <span className="text-yellow-500 text-4xl">”</span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-[-2rem] transform -translate-y-1/2 text-gray-800 rounded-full"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-[-2rem] transform -translate-y-1/2 text-gray-800 rounded-full"
        >
          &#8594;
        </button>
      </div>

      <div className="flex space-x-2 mt-4">
        {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === Math.floor(currentIndex / 3)
                ? "bg-blue-600"
                : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
