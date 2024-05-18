import axios from "axios";
import React, { useState } from "react";
import './search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './search.css'


function Search({fetchWeatherData}) {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');




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
