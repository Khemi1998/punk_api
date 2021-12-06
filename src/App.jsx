import React, { useState, useEffect } from "react";

import "./App.scss";
import CardList from "./components/CardList/CardList";
import NavBar from "./components/NavBar/NavBar";
//import beers from "./data/data";

const App = () => {
  const [beerArray, setBeerArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBeer, setFilterBeer] = useState(filteredBeers)

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beerArray.filter((beer) => {
    const beerLowerCase = beer.name.toLowerCase();
    return beerLowerCase.includes(searchTerm);
  });

  //ACCESSING API
  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers?page=2&per_page=80`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((beerObject) => {
        console.log(beerObject);
        setBeerArray(beerObject);
      });
  }, []);

  return (
    <div className="App">
      <NavBar handleInput={handleInput} searchTerm={searchTerm} />
      <CardList BeerArr={filterBeer} />
    </div>
  );
};

export default App;
