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
  const [highAcidity, setHighAcidity] =useState([]);
  const [test, setTest] = useState(false);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beerArray.filter((beer) => {
    const beerLowerCase = beer.name.toLowerCase();
    return beerLowerCase.includes(searchTerm);
  });

  const high_ABV = (event) => {
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
    console.log(urlLink);
  };

  const classic_range = (event) => {
    // event.target.checked ? setUrlLink("brewed_before=01-2010") : setUrlLink("");
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
    console.log(urlLink);
  };

  const high_acidity = (event) => {
    setTest(!test)
    console.log(test)

    console.log(urlLink);
    event.target.checked
      ? setBeerArray(highAcidity)
      : setBeerArray(unfilteredObject);
  };

  //ACCESSING API
  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers?&${urlLink}`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((beerObject) => {
        setBeerArray(beerObject);
        setUnfilteredObject(beerObject);
        const high_acidity = beerObject.filter(
          (beer) => beer.ph < 4 && beer.ph !== null
        );
        if (test===true) {
          setBeerArray(high_acidity)
        }
        setHighAcidity(high_acidity);
      });
  }, [urlLink, test]);

  return (
    <div className="App">
      <h1 className="App_name">POUR PROUDLY</h1>
      <div className="App_main">
        <NavBar
          handleInput={handleInput}
          results={filteredBeers.length}
          filterFunction1={high_ABV}
          filterFunction2={classic_range}
          filterFunction3={high_acidity}
          searchTerm={searchTerm}
        />
        <CardList BeerArr={filteredBeers} />
      </div>
    </div>
  );
};

export default App;
