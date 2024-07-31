import React from "react";

export const Welcome = ({ title, description, button }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{button}</button>
    </div>
  );
};
