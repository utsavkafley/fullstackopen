import React from "react";

import Weather from "./Weather";

const Country = ({ country }) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>
        capital: {country.capital} <br />
        population: {country.population}
      </p>
      <h2>Spoken languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="" height={100} />

      <Weather country={country} />
    </>
  );
};

export default Country;
