import './App.scss';
import CardList from './components/CardList/CardList';
import NavBar from './components/NavBar/NavBar'
import beers from './data/data';

const App = () => {
  return (
    <div className="App">
      <NavBar />
     <CardList BeerArr={beers}/>
    </div>
  );
}

export default App;
