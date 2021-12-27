import React from "react";
import React, { useState } from "react";
import "./Card.scss";

const Card = (props) => {
  const { picture, name, tag, date, ph, abv, description } = props;

  const [showImage, setShowImage] = useState(true);

  const handleClick = () => {
    setShowImage(!showImage)
  }

  return (
    <div className="card__container">
      <button className="card__button" onClick={handleClick}>info</button>
      {showImage && (<div className="card__front">
        <img className="card--picture" src={picture} alt={name} />
        <h2 className="card--name">{name}</h2>
        <h3 className="card--tag">{tag}</h3>
        <div className="card__data">
          <h5 className="data card--abv">ABV: {abv}</h5>
          <h5 className="data card--date">{date}</h5>
          <h5 className="data card--ph">pH: {ph}</h5>
        </div>
      </div>)}
      {!showImage && (<h5 className="card--description">{description}</h5>)}
    </div>
  );
};

export default Card;
