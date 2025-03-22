# Weather Website 🌦️

This project is a React-based weather application that allows users to fetch and display real-time weather data for any city using the OpenWeatherMap API.

## Features ✨

- Fetches real-time weather data for a specified city.
- Displays temperature, humidity, pressure, wind speed, weather condition, sunrise, and sunset times.
- Clean and responsive UI with weather-specific icons/emojis.
- Error handling for invalid city names.

## Tech Stack 🛠️

- **Frontend**: React.js, CSS
- **API**: OpenWeatherMap
- **Build Tool**: Vite

## Setup Instructions 🚀

Follow these steps to set up the project on your local system:

### Steps to Set Up
```bash
# 1. Clone the Repository
git clone https://github.com/Sai-guru/WeatherWebsite.git
cd WeatherWebsite

# 2. Install Dependencies
npm install

# 3. Set Up Environment Variables
# Create a .env file in the root directory of the project and add the following line:
# VITE_API_KEY=your_openweathermap_api_key
# Replace 'your_openweathermap_api_key' with your actual API key from OpenWeatherMap.

# 4. Start the Development Server
npm run dev

# 5. Build for Production (Optional)
npm run build

# 6. Preview the Production Build (Optional)
npm run preview
