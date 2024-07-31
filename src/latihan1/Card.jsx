import React from "react";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";

const Card = ({ image, category, date, title, content, link }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
};

export default Card;
