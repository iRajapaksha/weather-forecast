import React from "react";
import './weather_card.css';

function WeatherCard({ data }) {
    return (
        <div className="card">
            <div className="card-header">
                <p className="date">{data.date}</p>
                <p className="temp">{(data.temp - 273).toFixed(1)} °C</p>
            </div>
            <div className="card-body">
                <p>Feels Like: {(data.feels_like - 273).toFixed(1)} °C</p>
                <p>Humidity: {data.humidity} %</p>
                <p>Wind Speed: {data.wind_speed} m/s</p>
            </div>
        </div>
    );
}

export default WeatherCard;
