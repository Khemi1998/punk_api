import React from "react";
import './FilterBlock.scss';

const FilterBlock = (props, index) => {
  const { filterLabel, filterBlock } = props;

  return (
    <div className="FilterBlock">
        <h2 className="FilterBlock__label">{filterLabel}</h2>
        <input className="FilterBlock__checkbox" type="checkbox" id={index} onChange={filterBlock}/>
    </div>
  );
};

export default FilterBlock;