import React, { useState } from "react";

const Form = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      alert("Please enter a city name.");
      return;
    }
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="weatherForm">
      <input
        type="text"
        className="cityInput"
        placeholder="Enter the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="searchButton">
        Get Weather
      </button>
    </form>
  );
};

export default Form;
