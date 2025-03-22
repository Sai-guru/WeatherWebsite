import React from "react";


const Card = ({ weatherData, error }) => {
    const getWeatherEmoji = (weatherId) => {
        if (weatherId >= 200 && weatherId < 300) {
            return "⛈️";
        } else if (weatherId >= 300 && weatherId < 500) {
            return "🌧️";
        } else if (weatherId >= 500 && weatherId < 600) {
            return "🌦️";
        } else if (weatherId >= 600 && weatherId < 700) {
            return "❄️";
        } else if (weatherId >= 700 && weatherId < 800) {
            return "🌫️";
        } else if (weatherId === 800) {
            return "☀️";
        } else if (weatherId > 800) {
            return "☁️";
        } else {
            return "❓";
        }
    };

    return (
        <div className="card">
            {error ? (
                <p className="error">{error}</p>
            ) : weatherData ? (
                <>
                    <h1>
                        {weatherData.name}, {weatherData.sys.country}
                    </h1>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Pressure: {weatherData.main.pressure} hPa</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>
                        Weather: {weatherData.weather[0].description}{" "}
                        {getWeatherEmoji(weatherData.weather[0].id)}
                    </p>
                    <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
                </>
            ) : (
                <p>Enter a city to get started!</p>
            )}
        </div>
    );
};

export default Card;
