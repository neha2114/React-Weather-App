import './App.css';
import Axios from "axios";
import { useState } from "react";
import Header from './Header.js';
import Footer from './Footer.js';
import Forecast from './Forecast.js';
import Search from './Search.js';
// "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + this.apiKey
// pass data (latitude, longitude) from location API into forecast component (along with city name)
// get forecast data from lat, long
// display weather data

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchCoordinates = async (e) => {
    e.preventDefault();
    const locationResponse = await Axios.get(
      "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=API_KEY",
    );
    console.log(locationResponse);
    const lat = locationResponse.data[0].lat;
    const lon = locationResponse.data[0].lon;
    const weatherResponse = await Axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      lat + "&lon=" + lon +
      "&units=imperial&appid=API_KEY",
    );
    console.log(weatherResponse);
    updateWeather(weatherResponse);
  };
  return (
    <div>
      <Header />
      <Search updateCity={updateCity} fetchCoordinates={fetchCoordinates}/>
      {city && weather ?
        <Forecast fetchCoordinates={fetchCoordinates} weather={weather} city={city} />
        : null} 
      <Footer />
    </div>
  );
}

export default App;
