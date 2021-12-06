import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = (props) => {
  const { BeerArr } = props;

  const CardLists = BeerArr.map((beer, index) => {
    return (
      <div key={"beer" + index} className="Beer__Card">
        <Card
          picture={beer.image_url}
          name={beer.name}
          tag={beer.tagline}
          date={beer.first_brewed}
          abv={beer.abv}
        />
      </div>
    );
  });

  return <div className="CardList">{CardLists}</div>;
};

export default CardList;
