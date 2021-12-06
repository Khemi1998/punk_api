import './NavBar.scss';
import SearchBox from "../SearchBox/SearchBox"

const NavBar = (props) => {
  const { searchTerm, handleInput } = props;
  
  return (
    <div className="NavBar">
     <SearchBox searchTerm={searchTerm} handleInput={handleInput}/>
    </div>
  );
}

export default NavBar;