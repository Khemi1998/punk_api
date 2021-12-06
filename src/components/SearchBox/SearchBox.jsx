import React from "react";
import './SearchBox.scss';

const SearchBox = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <form className="SearchBox__form">
      <input placeholder="Search..." type="text" name="beer" value={searchTerm} onInput={handleInput} className="SearchBox__input"/>
    </form>
  );
};

export default SearchBox;