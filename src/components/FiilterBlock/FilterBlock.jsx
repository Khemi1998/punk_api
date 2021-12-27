import React from "react";
import './FilterBlock.scss';

const FilterBlock = (props, index) => {
  const { filterLabel, filterBlock, name } = props;

  return (
    <div className="FilterBlock">
        <h2 className="FilterBlock__label">{filterLabel}</h2>
        <input className="FilterBlock__checkbox" type="checkbox" id={index} name={name} onChange={filterBlock}/>
    </div>
  );
};

export default FilterBlock;