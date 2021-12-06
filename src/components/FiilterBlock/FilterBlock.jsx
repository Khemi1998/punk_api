import React from "react";
import './FilterBlock.scss';

const FilterBlock = (props, index) => {
  const { filterLabel } = props;

  return (
    <div className="FilterBlock">
        <h2 className="FilterBlock__label">{filterLabel}</h2>
        <input type="checkbox" id={index} />
    </div>
  );
};

export default FilterBlock;