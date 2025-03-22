

 const apiKey = import.meta.env.VITE_API_KEY;
 console.log("api is wokring !!");
 

export const fetchWeatherData = async (city) => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        
      throw new Error("City not found. Please try again.");
     
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message || "An error occurred while fetching data.");
  }
};
