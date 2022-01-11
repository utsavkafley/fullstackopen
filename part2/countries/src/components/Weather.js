import React from "react";

const Weather = ({ weatherData }) => {
    console.log(weatherData)
    if (weatherData && Object.keys(weatherData) !== 0)
        return (
            <div>
                <h2>Weather in {weatherData.name}</h2>
                <p>
                    <strong>temperature</strong> {weatherData.main.temp} Fahrenheit
                </p>
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
            </div>
        );
    return <></>;
};

export default Weather;
// URL is http://openweathermap.org/img/wn/10d@2x.png