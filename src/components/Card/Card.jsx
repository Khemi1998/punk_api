import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { picture, name, tag, date, abv } = props;

  return (
    <div className="Card">
      <img className="Card__picture" src={picture} alt={name} />
      <h2 className="Card__name">{name}</h2>
      <h3 className="Card__tag">{tag}</h3>
      <h4 className="Card__date">{date}</h4>
      <h5 className="Card__abv">ABV: {abv}</h5>
    </div>
  );
};

export default Card;
