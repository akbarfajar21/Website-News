import React from "react";

const Button = ({ link }) => {
  return (
    <a href={link} className="bg-black text-white py-2 px-4 rounded-md">
      Lihat Selengkapnya
    </a>
  );
};

export default Button;
