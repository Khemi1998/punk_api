import React from "react";
import "./Card.scss";

const Card = (props) => {
  const {picture, name, tag, date, ph, abv } = props;

  return (
    <div className="card__container">
      <img className="card--picture" src={picture} alt={name} />
      <h2 className="card--name">{name}</h2>
      <h3 className="card--tag">{tag}</h3>
      <h4 className="card--abv">ABV: {abv}</h4>
      <h5 className="card--date">{date}</h5>
      <h6 className="card--ph">pH: {ph}</h6>
    </div>
  );
};

export default Card;
