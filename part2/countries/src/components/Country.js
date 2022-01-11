import React, { useEffect, useState } from "react";
import axios from "axios";

import Weather from "./Weather";

const Country = ({ country }) => {
  const api_key = process.env.REACT_APP_WEATHER_API_KEY
  const [weatherData, setWeatherData] = useState({})
  useEffect(() => {
    const eventHandler = (response) => {
      setWeatherData(response.data)
    }

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=imperial`).then(eventHandler)
  }, [country, api_key])

  return (
    <>
      <div>
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
      </div>


      <Weather weatherData={weatherData} />

    </>
  );
};

export default Country;
