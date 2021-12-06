import './NavBar.scss';
import SearchBox from "../SearchBox/SearchBox"
import FilterBlock from "../FiilterBlock/FilterBlock";

const NavBar = (props) => {
  const { searchTerm, handleInput, filterFunction1} = props;
  
  return (
    <div className="NavBar">
     <SearchBox searchTerm={searchTerm} handleInput={handleInput}/>
     <FilterBlock filterBlock={filterFunction1} filterLabel="High ABV (>6.0%)"/>
     <FilterBlock filterLabel="Classic Range"/>
     <FilterBlock filterLabel="Acidic (pH<4)"/>
    </div>
  );
}

export default NavBar;