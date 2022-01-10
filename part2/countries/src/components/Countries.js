import React from "react";
import Country from "./Country";

const Countries = ({ countries, countryDisplay, setCountryDisplay }) => {
  if (countries.length > 10) return <p>Too many matches, keep typing!</p>;
  else if (countries.length <= 10 && countries.length > 1)
    return (
      <div>
        {countries.map((country, i) => (
          <div key={country.name.common}>
            <p>
              <button
                onClick={() => {
                  const copy = [...countryDisplay];
                  copy[i] = !copy[i];
                  setCountryDisplay(copy);
                }}
              >
                show
              </button>
              {country.name.common}{" "}
            </p>
            {countryDisplay[i] === true ? <Country country={country} /> : <></>}
          </div>
        ))}
      </div>
    );
  else if (countries.length === 1) {
    return (
      <>
        <Country country={countries[0]} />
      </>
    );
  }

  return <></>;
};

export default Countries;
