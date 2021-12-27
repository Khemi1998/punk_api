import React from "react";
import './SearchBox.scss';

const SearchBox = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <div className="searchbox__container">
      <input placeholder="Search..." type="text" name="beer" value={searchTerm} onInput={handleInput} className="searchbox--input"/>
    </div>
  );
};

//for form, use defaultvalue and onsubmit => dont forget to preventdefault()

export default SearchBox;