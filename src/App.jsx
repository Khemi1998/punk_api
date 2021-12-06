import './App.scss';
import CardList from './components/CardList/CardList';
import beers from './data/data';

const App = () => {
  return (
    <div className="App">
     <CardList BeerArr={beers}/>
    </div>
  );
}

export default App;
