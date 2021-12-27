import "./NavBar.scss";
import SearchBox from "../SearchBox/SearchBox";
import FilterBlock from "../FiilterBlock/FilterBlock";

const NavBar = (props) => {
  const {
    searchTerm,
    handleInput,
    filterFunction1,
    results
  } = props;

  return (
    <div className="NavBar">
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      <p className="NavBar__results" >Results: {results} beer(s)</p>
      <section className="NavBar__checkboxes">
        <FilterBlock
          filterBlock={filterFunction1}
          filterLabel="High ABV (>6.0%)"
          name="abv"
        />
        <FilterBlock
          filterBlock={filterFunction1}
          filterLabel="Classic Range"
          name="classic"
        />
        <FilterBlock
          filterBlock={filterFunction1}
          filterLabel="Acidic (pH<4)"
          name="ph"
        />
      </section>
    </div>
  );
};

export default NavBar;
