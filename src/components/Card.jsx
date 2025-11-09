import React from "react";

const Card = ({ image, title, size, brand, price }) => {
  return (
    <div className="shadow-sm hover:shadow-md hover:-translate-y-4 transform transition-all duration-300 bg-white p-2 rounded-lg cursor-pointer">
      <img
        src={image}
        alt={title}
        className="rounded-md mb-2 w-full object-cover"
      />
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-semibold text-xs sm:text-sm md:text-base">
          {title}
        </h3>
        <button className="text-gray-600 hover:text-red-500 text-lg">♡</button>
      </div>
      <p className="text-[10px] sm:text-xs text-gray-600">
        {brand} - {size}
      </p>
      <p className="font-bold text-xs sm:text-sm md:text-base mt-1">{price}</p>
    </div>
  );
};

export default Card;
