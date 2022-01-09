import React from "react";

import CountryList from "./CountryList";
import CountryData from "./CountryData";

const Content = ({ countries, filterText }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filterText)
  );

  if (filteredCountries.length === countries.length) return <></>;
  else if (filteredCountries.length > 10)
    return <p>Too many matches, keep typing!</p>;
  else if (filteredCountries.length === 1)
    return <CountryData country={filteredCountries} />;
  else {
    return (
      <>
        <CountryList countries={filteredCountries} />
      </>
    );
  }
};

export default Content;
