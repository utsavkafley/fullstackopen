import React from "react";

const CountryList = ({ countries }) => {
  return (
    <>
      {countries.map((country) => (
        <p key={country.flag}>{country.name.common}</p>
      ))}
    </>
  );
};

export default CountryList;
