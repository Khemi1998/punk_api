import React from "react";
import './SearchBox.scss';

const SearchBox = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <div className="SearchBox__form">
      <input placeholder="Search..." type="text" name="beer" value={searchTerm} onInput={handleInput} className="SearchBox__input"/>
    </div>
  );
};

export default SearchBox;