import React from "react";
import './FilterBlock.scss';

const FilterBlock = (props, index) => {
  const { filterLabel, filterBlock, name } = props;

  return (
    <div className="filterblock__container">
        <h5 className="filterblock--label">{filterLabel}</h5>
        <input className="filterblock--checkbox" type="checkbox" id={index} name={name} onChange={filterBlock}/>
    </div>
  );
};

export default FilterBlock;