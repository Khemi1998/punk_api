import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { index, picture, name, tag, date, ph, abv } = props;

  return (
    <div className="Card" key={"beer" + index}>
      <img className="Card__picture" src={picture} alt={name} />
      <h2 className="Card__name">{name}</h2>
      <h3 className="Card__tag">{tag}</h3>
      <h4 className="Card__abv">ABV: {abv}</h4>
      <h5 className="Card__date">{date}</h5>
      <h6 className="Card__ph">pH: {ph}</h6>
    </div>
  );
};

export default Card;
