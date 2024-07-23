import React from "react";
import "./Card.css";


export const Cards = ({ image, title, description, price,handleClick,ButtonName }) => {
  return (
    <div className="cardWrapper">
      <div className="cardImage">
        <img src={image} alt="cardImage" />
      </div>
      <div className="cardContent">
        <h3>{title}</h3>
        <p>{description}</p>
        <h5>${price}</h5>
      </div>
      <button className="btn cardButton" onClick={() => handleClick()}>{ButtonName}</button>
    </div>
  );
};
