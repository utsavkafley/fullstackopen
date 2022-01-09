import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import Content from "./components/Content";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const eventHandler = (response) => {
      setCountries(response.data);
    };

    axios.get("https://restcountries.com/v3.1/all").then(eventHandler);
  }, []);

  return (
    <div>
      <Filter
        filterText={filterText}
        filterChangeHandler={(event) => {
          setFilterText(event.target.value.toLowerCase());
        }}
      />

      <Content countries={countries} filterText={filterText} />
    </div>
  );
};
export default App;
