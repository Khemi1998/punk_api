import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = (props) => {
  const { BeerArr } = props;

  const CardLists = BeerArr.map((beer, index) => {
    return (
        <Card
          index={index}
          picture={beer.image_url}
          name={beer.name}
          tag={beer.tagline}
          date={beer.first_brewed}
          ph={beer.ph}
          abv={beer.abv}
        />
    );
  });

  return <div className="CardList">{CardLists}</div>;
};

export default CardList;
