import React, { useState, useEffect } from "react";

import "./App.scss";
import CardList from "./components/CardList/CardList";
import NavBar from "./components/NavBar/NavBar";
//import beers from "./data/data";

const App = () => {
  const [beerArray, setBeerArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [unfilteredObject, setUnfilteredObject] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beerArray.filter((beer) => {
    const beerLowerCase = beer.name.toLowerCase();
    return beerLowerCase.includes(searchTerm);
  });

  const high_ABV = (event) => {
    const high_abv = filteredBeers.filter((beer) => beer.abv > 6);
    event.target.checked ? setBeerArray(high_abv) : setBeerArray(unfilteredObject);
  };

  const high_acidity = (event) => {
    const high_acidity = filteredBeers.filter((beer) => beer.ph <4);
    event.target.checked ? setBeerArray(high_acidity) : setBeerArray(unfilteredObject);
  };

  const classic_range = (event) => {
    const classic_range = filteredBeers.filter((beer) => beer.first_brewed.split("-"));
  };

  //ACCESSING API
  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers?page=2&per_page=80`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((beerObject) => {
        setBeerArray(beerObject);
        setUnfilteredObject(beerObject);
      });
  }, []);

  return (
    <div className="App">
      <NavBar
        handleInput={handleInput}
        filterFunction1={high_ABV}
        filterFunction2= {classic_range}
        filterFunction3={high_acidity}
        searchTerm={searchTerm}
      />
      <CardList BeerArr={filteredBeers} />
    </div>
  );
};
export default App;
