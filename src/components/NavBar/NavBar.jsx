import './NavBar.scss';
import SearchBox from "../SearchBox/SearchBox"
import FilterBlock from "../FiilterBlock/FilterBlock";

const NavBar = (props) => {
  const { searchTerm, handleInput, filterFunction1, filterFunction2, filterFunction3} = props;
  
  return (
    <div className="NavBar">
     <SearchBox searchTerm={searchTerm} handleInput={handleInput}/>
     <FilterBlock filterBlock={filterFunction1} filterLabel="High ABV (>6.0%)"/>
     <FilterBlock filterBlock={filterFunction2}filterLabel="Classic Range"/>
     <FilterBlock filterBlock={filterFunction3} filterLabel="Acidic (pH<4)"/>
    </div>
  );
}

export default NavBar;