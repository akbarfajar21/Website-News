import React from "react";
import "./Card.css";

const Card = ({ title, description, imageUrl, detail }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-link">{detail}</p>
      </div>
    </div>
  );
};

export default Card;
