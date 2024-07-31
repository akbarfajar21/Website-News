import React from "react";
import Button from "./Button";

const CardBody = ({ date, title, content, link }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500 text-sm mb-2">{date}</p>
      <p className="text-gray-700 mb-4">{content}</p>
      <Button link={link} />
    </div>
  );
};

export default CardBody;
