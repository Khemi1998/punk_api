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
    <div className="nav-bar__container">
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      <p className="nav-bar--results" >Results: {results} beer(s)</p>
      <section className="nav-bar__checkboxes">
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
