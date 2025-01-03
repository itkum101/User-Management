import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Making the API request
    axios
      .get('https://api.subedimukti.com.np/WeatherForecast')
      .then((response) => {
        // Set the weather data
        setWeatherData(response.data);
      })
      .catch((err) => {
        // Handle any error
        setError('Failed to fetch data');
        console.error(err);
      });
  }, []); // Empty array ensures this runs only once when the component is mounted

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Weather Forecast</h1>
      <p>{JSON.stringify(weatherData, null, 2)}</p>
    </div>
  );
};

export default WeatherForecast;
