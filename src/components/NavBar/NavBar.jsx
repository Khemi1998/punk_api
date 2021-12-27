import "./NavBar.scss";
import SearchBox from "../SearchBox/SearchBox";
import FilterBlock from "../FiilterBlock/FilterBlock";

const NavBar = (props) => {
  const {
    searchTerm,
    handleInput,
    filterFunction,
    results
  } = props;

  return (
    <div className="NavBar">
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      <p className="NavBar__results" >Results: {results} beer(s)</p>
      <section className="NavBar__checkboxes">
        <FilterBlock
          filterBlock={filterFunction}
          filterLabel="High ABV (>6.0%)"
          name="abv"
        />
        <FilterBlock
          filterBlock={filterFunction}
          filterLabel="Classic Range"
          name="classic"
        />
        <FilterBlock
          filterBlock={filterFunction}
          filterLabel="Acidic (pH<4)"
          name="ph"
        />
      </section>
    </div>
  );
};

export default NavBar;
