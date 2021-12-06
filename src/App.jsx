import React, { useState, useEffect } from "react";

import "./App.scss";
import CardList from "./components/CardList/CardList";
import NavBar from "./components/NavBar/NavBar";
//import beers from "./data/data";

const App = () => {
  const [beerArray, setBeerArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }

  //Requests that return multiple items will be limited to 25 results by default. Other pages are accesed using the ?page paramater, you can also increase the amount of beers returned in each request by changing the ?per_page paramater.

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

  const filteredBeers = beerArray.filter(beer => {
    const beerLowerCase = beer.name.toLowerCase();
    return beerLowerCase.includes(searchTerm);
  });

  return (
    <div className="App">
      <NavBar handleInput={handleInput} searchTerm={searchTerm}/>
      <CardList BeerArr={filteredBeers} />
    </div>
  );
};

export default App;
//const { searchTerm, handleInput } = props;