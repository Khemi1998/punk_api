import './NavBar.scss';
import SearchBox from "../SearchBox/SearchBox"
import FilterBlock from "../FiilterBlock/FilterBlock";

const NavBar = (props) => {
  const { searchTerm, handleInput, Filter_Condition_1, Filter_Condition_2, Filter_Condition_3 } = props;
  
  return (
    <div className="NavBar">
     <SearchBox searchTerm={searchTerm} handleInput={handleInput}/>
     <FilterBlock onClick={Filter_Condition_1} filterLabel="High ABV (>6.0%)"/>
     <FilterBlock onClick={Filter_Condition_2} filterLabel="Classic Range"/>
     <FilterBlock onClick={Filter_Condition_3} filterLabel="Acidic (pH<4)"/>
    </div>
  );
}

export default NavBar;