import axios from "axios";
import React, { useState } from "react";
import './search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './search.css'


function Search({fetchWeatherData}) {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

//   const fetchData = () => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=af54ae1bae07a9b3aa14f7299ab99b9e`;

//     axios.get(url)
//       .then((response) => {
//         setData(response.data);
//         console.log("Weather data:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching weather data:", error);
//       });
//   };


  const handleLatitudeChange = (event) => {
    setLatitude(event.target.value);
  };

  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value);
  };

  const handleSearch = () => {
    fetchWeatherData(latitude,longitude)
  };

  return (

      <div className="search">
        <input
          value={latitude}
          onChange={handleLatitudeChange}
          placeholder="Latitude"
          type="text"
        />
        <input
          value={longitude}
          onChange={handleLongitudeChange}
          placeholder="Longitude"
          type="text"
        />
        <button onClick={handleSearch} style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer', color:'white'}}>
        <FontAwesomeIcon icon={faSearch} style={{ fontSize: '30px' }} />
</button>
      </div>

  );
}

export default Search;
