import axios from "axios";
import React, { useState, useEffect } from "react";
import Search from "../components/search";
import WeatherCard from "../components/weather_card";
import './home.css'

function Home() {
  const [data, setData] = useState({});
  const [showAllCards, setShowAllCards] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [forecast, setForecast] = useState([]);
  const [iconURL,setIconURL] = useState('');
  const [location, setLocation] = useState('');
  const apiKey = 'af54ae1bae07a9b3aa14f7299ab99b9e';
  const weatherAPI = '6fd815b9b2f26abc64a5a67f64d9a036';

  const colomboUrl = `https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=${apiKey}`;
  var iconUrl = '';
  useEffect(() => {
    axios.get(colomboUrl)
      .then((response) => {
        setData(response.data);
        console.log("Colombo Weather data:", response.data);
        const iconCode = response.data.weather[0].icon;
        setIconURL(`http://openweathermap.org/img/wn/${iconCode}.png`);
        console.log(iconURL);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);


  const fetchWeatherData = (latitude,longitude) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherAPI}`;
    const locationURL = `https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${latitude}&lon=${longitude}&appid=${weatherAPI}`;
    console.log(weatherUrl);
    console.log(locationURL);
    axios.get(locationURL)
    .then((response)=>{
      console.log("Location data: ", response.data)
      
    }).catch((e)=>{
      console.error("Error fetching weather data:", e);

    });
    axios.get(weatherUrl)
      .then((response) => {
        console.log("Weather data:", response.data.city.name);
        setLocation(response.data.city.name)
        const dailyData = processWeatherData(response.data.list);
        setForecast(dailyData);
        setSearchClicked(true);

      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  const processWeatherData = (data) => {
    const dailyData = {};

    data.forEach((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString("en-US");
      if (!dailyData[date]) {
        dailyData[date] = {
          temp: item.main.temp,
          feels_like: item.main.feels_like,
          humidity: item.main.humidity,
          wind_speed: item.wind.speed,
          date: date
        };
      }
    });

    return Object.values(dailyData).slice(0, 5);
  };

  const toggleCardsVisibility = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="top">
            <p>Today</p>
            <h2>Colombo</h2>
            <div className="temp-data">

            {data.main && <h1>{(data.main.temp - 273).toFixed(3)}°C</h1>}
            {data.weather && 
            <div className="weather-description">
              <img src={iconURL} alt="Weather icon"/>
              <p>{data.weather[0].main}</p>
            </div>
            }
            </div>
        </div>
        <Search fetchWeatherData={fetchWeatherData} />
       {searchClicked && <p>Location: {location}</p>} 
        <div className="weather-cards-container">
        {searchClicked && (
        <>
          {forecast.slice(0, showAllCards ? 5 : 3).map((dayData, index) => (
            <WeatherCard key={index} data={dayData} />
          ))}
          <div className="view-more" onClick={toggleCardsVisibility}>
            {showAllCards ? "Show Less" : "View More"}
          </div>
        </>
      )}
        </div>
      </div>
    </div>
  );
}

export default Home;
