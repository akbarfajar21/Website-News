import React from "react";

function BelajarChildren() {
  return (
    <div className="flex flex-col gap-4">
      <CardChildren title="Hello World">
        Ini Card dari Children
        <p>Dari anak</p>
        <button className="bg-blue-400 p-2 rounded-md text-white">
          Klik disini untuk menjadi anak sholeh
        </button>
      </CardChildren>

      <CardChildren title="Hello World">
        Ini Card kedua
        <p>Dari anak</p>
        <button className="bg-blue-400 p-2 rounded-md text-white">
          Klik disini untuk menjadi anak sholeh
        </button>
      </CardChildren>

      <CardChildren title="Hello World">
        Ini Card ketiga
        <p>Dari anak</p>
        <button className="bg-blue-400 p-2 rounded-md text-white">
          Klik disini untuk menjadi anak sholeh
        </button>
      </CardChildren>
    </div>
  );
}

const CardChildren = ({ children, title }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default BelajarChildren;
