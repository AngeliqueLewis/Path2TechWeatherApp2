import React, { useState, useCallback, useEffect } from 'react';
import { getWeatherData } from '../services/WeatherService';
import SearchBar from '../components/SearchBar';
import WeatherData from '../components/WeatherData';
import './Main.css';
import './CloudsAnimation.css';

const Main = () => {
  const persistedLocation = localStorage.getItem("searchTerm");
  const [searchTerm, setSearchTerm] = useState(persistedLocation || "");
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState(searchTerm || '');


  // Function to fetch weather data
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getWeatherData(location);
      console.log(res.data);
      setWeatherData(res.data.list);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(true);
      setLoading(false);
    }
  }, [location]);

  // Effect to fetch data on location change
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Effect to persist search term in localStorage
  useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);
  }, [searchTerm]);

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(searchTerm);
  }

  return (
    <div id='main' className='container'>
      {/* Search Bar Component */}
      <div className="clouds-container"></div> {/* Clouds animation container */}
      <div className="centered-content"></div>
      <SearchBar
        handleSubmit={handleSubmit}
        searchTerm={searchTerm}
        handleChange={(e) => setSearchTerm(e.target.value)}
        id={'search-city'}
      >
        <strong>Search City: {searchTerm}</strong>
      </SearchBar>
      {error && <p>There was an error loading your data</p>}
      {loading ? <p>Data Loading</p> : <WeatherData list={weatherData} />}
    </div>
  );
}

export default Main;
