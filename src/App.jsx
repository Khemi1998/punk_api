import React, { useState, useEffect } from "react";

import "./App.scss";
import CardList from "./components/CardList/CardList";
import NavBar from "./components/NavBar/NavBar";
//import beers from "./data/data";

const App = () => {
  const [beerArray, setBeerArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  let [urlLink, setUrlLink] = useState("");
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
    //event.target.checked ? setUrlLink("abv_gt=6") : setUrlLink("");

    if (event.target.checked) {
      if ((urlLink = "brewed_before=01-2010")) {
        setUrlLink(urlLink + "&abv_gt=6");
      } else {
        setUrlLink("abv_gt=6");
      }
    } else {
      if ((urlLink = "brewed_before=01-2010&abv_gt=6")) {
        setUrlLink("brewed_before=01-2010");
      } else {
        setUrlLink("");
      }
    }
  };

  const high_acidity = (event) => {
    const high_acidity = filteredBeers.filter((beer) => (beer.ph < 4)&&(beer.ph !=null));
    event.target.checked
      ? setBeerArray(high_acidity)
      : setBeerArray(unfilteredObject);
  };
  /*
    event.target.checked
    ? setUrlLink("ph_lt=4")
    : setUrlLink("");
    */

  const classic_range = (event) => {
    // event.target.checked ? setUrlLink("brewed_before=01-2010") : setUrlLink("");
    if (event.target.checked) {
      if ((urlLink = "abv_gt=6")) {
        setUrlLink(urlLink + "&brewed_before=01-2010");
      } else {
        setUrlLink("brewed_before=01-2010");
      }
    } else {
      if ((urlLink = "abv_gt=6&brewed_before=01-2010")) {
        setUrlLink("abv_gt=6");
      } else {
        setUrlLink("");
      }
    }
  };

  //ACCESSING API
  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers?${urlLink}&per_page=78`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((beerObject) => {
        setBeerArray(beerObject);
        setUnfilteredObject(beerObject);
      });
  }, [urlLink]);

  return (
    <div className="App">
      <h1 className="App_name">POUR PROUDLY</h1>
      <div className="App_main">
      <NavBar
          handleInput={handleInput}
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
