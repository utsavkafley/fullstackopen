import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [filterText, setFilterText] = useState("");
  const [countries, setCountries] = useState([]);
  const [countryDisplay, setCountryDisplay] = useState(countries);
  const [countryData, setCountryData] = useState({});

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filterText.toLowerCase())
  );
  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    setCountryDisplay(new Array(10).fill(false));

    if (filteredCountries === 1) setCountryData(filteredCountries[0]);
  };

  useEffect(() => {
    const eventHandler = (response) => {
      setCountries(response.data);
    };

    axios.get("https://restcountries.com/v3.1/all").then(eventHandler);
  }, []);

  return (
    <div>
      <Filter filterText={filterText} handleFilterChange={handleFilterChange} />

      <Countries
        countries={filteredCountries}
        countryDisplay={countryDisplay}
        setCountryDisplay={setCountryDisplay}
      />
    </div>
  );
};
export default App;
