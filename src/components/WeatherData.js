import React from 'react';
import { getCurrentTime } from './utils/timeUtils';
import "./WeatherData.css"


export default function WeatherData({ list }) {
  const item = list[0]; // Get the first item from the list

// Function to format sunset time to hh:mmAM/PM format
// eslint-disable-next-line
const CurrentTime = (timestamp) => {
  const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  let hours = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine if it's AM or PM
  hours = hours % 12; // Convert hours to 12-hour format
  hours = hours ? hours : 12; // Handle midnight (0 hours) as 12 AM
  return `${("0" + hours).slice(-2)}:${minutes}${ampm}`; // Format as hh:mmAM/PM
}

// Example usage:

  return (
    <>
      {item && (
        <div key={item.day} className="weather-card">
          <h1>Weather Whiz</h1>
          <div className = 'sun'>
            <img alt="weather" className="weather-icon" src="icons/02d.png"/>
          </div>
          <h2>Current Temperature: {Math.round(item.main.temp)}°</h2>
          <p> Current Time: {getCurrentTime()}</p>
          <p>Humidity: {item.main.humidity}%</p>
          <p>Lowest Temperature: {Math.round(item.main.temp_min)}°</p>
          <p>Highest Temperature: {Math.round(item.main.temp_max)}°</p>
          {/* Displaying wind information */}
          {item.wind && (
            <p>Wind Speed: {item.wind.speed} m/s</p>
          )}
          
        </div>
      )}
   </>
  );
}
