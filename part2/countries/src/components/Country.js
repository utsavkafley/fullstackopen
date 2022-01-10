import React from "react";

const Country = ({ country }) => {
  console.log(country);
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>
        capital: {country.capital} <br />
        population: {country.population}
      </p>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="" height={100} />
    </>
  );
};

export default Country;
