import React from "react";

const CountryData = ({ country }) => {
  country = country[0];

  const languages = Object.values(country.languages);
  const flag = Object.values(country.flags);
  console.log(country);
  return (
    <>
      <h1>{country.name.common}</h1>

      <p>
        capital {country.capital} <br />
        population {country.population}
      </p>

      <h2>languages</h2>
      <ul>
        {languages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <img height="140px" src={flag[0]} alt="" />
    </>
  );
};

export default CountryData;
