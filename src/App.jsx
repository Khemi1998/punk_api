import React, { useState, useEffect } from "react";

import "./App.scss";
import CardList from "./components/CardList/CardList";
import NavBar from "./components/NavBar/NavBar";
//import beers from "./data/data";

const App = () => {
  const [beerArray, setBeerArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [urlLink, setUrlLink] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beerArray.filter((beer) => {
    const beerLowerCase = beer.name.toLowerCase();
    return beerLowerCase.includes(searchTerm);
  });

  const high_ABV = (event) => {
    event.target.checked
    ? setUrlLink("abv_gt=6")
    : setUrlLink("");
  };

  const high_acidity = (event) => {
    event.target.checked
    ? setUrlLink("ph_lt=6")
    : setUrlLink("");
  };

  const classic_range = (event) => {
    event.target.checked
      ? setUrlLink("brewed_before=01-2010")
      : setUrlLink("");
      };

  //ACCESSING API
  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers?${urlLink}`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((beerObject) => {
        setBeerArray(beerObject);
      });
  }, [urlLink]);

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
