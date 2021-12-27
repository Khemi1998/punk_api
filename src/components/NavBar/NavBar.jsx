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
      <h6 className="nav-bar--results" >Results: {results} beer(s)</h6>
      <section className="nav-bar__checkboxes">
        <FilterBlock
          filterBlock={filterFunction}
          filterLabel="high ABV (>6.0%)"
          name="abv"
        />
        <FilterBlock
          filterBlock={filterFunction}
          filterLabel="classic range"
          name="classic"
        />
        <FilterBlock
          filterBlock={filterFunction}
          filterLabel="acidic (pH<4)"
          name="ph"
        />
      </section>
    </div>
  );
};

export default NavBar;
