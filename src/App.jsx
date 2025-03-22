import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Card from "./Card";
import { fetchWeatherData } from "./Api";

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    const fetchWeather = async (city) => {
        try {
            const data = await fetchWeatherData(city);
            setWeatherData(data);
            setError("");
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        }
    };

    return (
        <div className="app">
            <Form onSearch={fetchWeather} />
            <Card weatherData={weatherData} error={error} />
        </div>
    );
};

export default App;
