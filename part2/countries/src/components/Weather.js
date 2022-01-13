import React from "react";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";

const Weather = ({ country }) => {
  const [weatherData, setWeatherData] = useState();
  const api_key = process.env.REACT_APP_API_KEY;
  const city_name = country.capital;
  const windDirections = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
  ];

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=imperial`;

  useEffect(() => {
    const eventHandler = (response) => {
      setWeatherData(response.data);
    };

    axios.get(url).then(eventHandler);
  }, []);

  if (typeof weatherData !== "undefined") {
    const index = Math.round(weatherData.wind.deg / 22.5 + 1);

    return (
      <div>
        <h2>Weather in {weatherData.name}</h2>
        <p>
          <strong>temperature: </strong> {weatherData.main.temp} Fahrenheit
        </p>
        <img src="" alt="" />
        <p>
          <strong>wind: </strong>
          {weatherData.wind.speed} mph direction {windDirections[index]}
        </p>
      </div>
    );
  }

  return <>Fetching weather data...</>;
};

export default Weather;
