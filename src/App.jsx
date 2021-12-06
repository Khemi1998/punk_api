import React, { useState, useEffect } from "react";

import "./App.scss";
import CardList from "./components/CardList/CardList";
import NavBar from "./components/NavBar/NavBar";
//import beers from "./data/data";

const App = () => {
  const [beerArray, setBeerArray] = useState([]);

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

  return (
    <div className="App">
      <NavBar />
      <CardList BeerArr={beerArray} />
    </div>
  );
};

export default App;
