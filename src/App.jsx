import React, { useState, useEffect } from "react";

import "./App.scss";
import CardList from "./components/CardList/CardList";
import NavBar from "./components/NavBar/NavBar";
//import beers from "./data/data";

const App = () => {
  const [beerArray, setBeerArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  let [urlLink, setUrlLink] = useState("");
  const [unfilteredObject, setUnfilteredObject] = useState([]);
  const [highAcidity, setHighAcidity] = useState([]);
  const [highAcidityCheck, setHighAcidityCheck] = useState(false);
  const [searching, setSearching] = useState("");
  const [reset, setReset] = useState(false);

  const handleInput = (event) => {
    const cleanInput = event.target.value;
    if (cleanInput.length === 0) {
      setReset(true);
      setBeerArray(unfilteredObject);
    } else {
      setReset(false);
    }
    setSearchTerm(cleanInput);
    if (searchTerm.length !== 0) {
      setSearching(`beer_name=${searchTerm.replace(" ", "_").toLowerCase()}&`);
    }
  };

  // const filteredBeers = beerArray.filter((beer) => {
  //   const beerLowerCase = beer.name.toLowerCase();
  //   return beerLowerCase.includes(searchTerm);
  // });

  const filtering = (event) => {
    console.log(event.target.name);
    if (event.target.name === "abv") {
      if (event.target.checked) {
        if (urlLink === "") {
          setUrlLink("abv_gt=6");
        } else {
          setUrlLink("abv_gt=6&brewed_before=01-2010");
        }
      } else {
        if (urlLink === "brewed_before=01-2010&abv_gt=6") {
          setUrlLink("brewed_before=01-2010");
        } else {
          setUrlLink("");
        }
      }
    } else if (event.target.name === "classic") {
      if (event.target.checked) {
        if (urlLink === "") {
          setUrlLink("brewed_before=01-2010");
        } else {
          setUrlLink("brewed_before=01-2010&abv_gt=6");
        }
      } else {
        if (urlLink === "brewed_before=01-2010&abv_gt=6") {
          setUrlLink("brewed_before=01-2010");
        } else {
          setUrlLink("");
        }
      }
    } else if (event.target.name === "ph") {
      setHighAcidityCheck(!highAcidityCheck);
      console.log(highAcidityCheck);

      console.log(urlLink);
      event.target.checked
        ? setBeerArray(highAcidity)
        : setBeerArray(unfilteredObject);
    }
  };

  //ACCESSING API
  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers?${searching}${urlLink}&per_page=80`;
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((beerObject) => {
        setBeerArray(beerObject);
        setUnfilteredObject(beerObject);
        const high_acidity = beerObject.filter(
          (beer) => beer.ph < 4 && beer.ph !== null
        );
        if (highAcidityCheck === true) {
          setBeerArray(high_acidity);
        }
        setHighAcidity(high_acidity);
      })
      .catch((error) => {
        if (error) {
          if (reset === false) {
            setBeerArray([]);
          }
        }
      });
  }, [urlLink, highAcidityCheck, searching, reset]);

  return (
    <div className="App">
      <h1 className="App_name">PUNK API</h1>
      <div className="App_main">
        <NavBar
          handleInput={handleInput}
          results={beerArray.length}
          filterFunction1={filtering}
          searchTerm={searchTerm}
        />
        <CardList BeerArr={beerArray} />
      </div>
    </div>
  );
};

export default App;
