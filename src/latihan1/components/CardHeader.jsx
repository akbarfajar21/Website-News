import React from "react";

const CardHeader = ({ image, category }) => {
  return (
    <div className="relative">
      <img src={image} alt={category} className="w-full h-48 object-cover" />
      <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md">
        {category}
      </div>
    </div>
  );
};

export default CardHeader;
