import React from "react";
import CardContainer1 from "./componens_card/CardContainer1";
import CardContainer2 from "./componens_card/CardContainer2";
import CardContainer3 from "./componens_card/CardContainer3";
import CardContainer4 from "./componens_card/CardContainer4";
import './App.css'; // Make sure to import your CSS file

const CardApp = () => {
  return (
    <>
      <h1 className="centered-title">Portal Berita Terkini</h1>
      <div className="app-container">
        <CardContainer1 />
        <CardContainer2 />
        <CardContainer3 />
        <CardContainer4 />
      </div>
    </>
  );
};

export default CardApp;
