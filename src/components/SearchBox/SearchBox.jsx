import React from "react";
import './SearchBox.scss';

const SearchBox = (props) => {
  const { handleSubmit } = props;
  return (
    <form className="SearchBox__form" onSubmit={handleSubmit}>
      <input placeholder="Search..." type="text" name="beer" className="SearchBox__input" />
    </form>
  );
};

export default SearchBox;