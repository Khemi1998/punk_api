import React from "react";
import './FilterBlock.scss';

const FilterBlock = (props, index) => {
  const { filterLabel, filterBlock, name } = props;

  return (
    <div className="filterblock__container">
        <h2 className="filterblock--label">{filterLabel}</h2>
        <input className="filterblock--checkbox" type="checkbox" id={index} name={name} onChange={filterBlock}/>
    </div>
  );
};

export default FilterBlock;