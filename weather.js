import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
var key = process.env.WEATHER_API;

const weatherReport = async (location) => {
  var link = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;
  try {
    var response = await axios.get(link);
    console.log("response = ", response.data);
    var weatherData = response.data;
    var city = weatherData.name;
    var temp = Math.round(weatherData.main.temp - 273.15, 2)
    var country = weatherData.sys.country;
    var windspeed = weatherData.wind.speed;
    var weatherDescription = weatherData.weather[0].description;
    var humidity = weatherData.main.humidity;
    var pressure = Math.round(weatherData.main.pressure - 1013.15)
    var sunrise = new Date(weatherData.sys.sunrise*1000);
    var sunset = new Date(weatherData.sys.sunset*1000);
    var message = `*** ${city} ***\nTemperature : ${temp}°C\nWind Speed: ${windspeed}m/s\nWeather : ${weatherDescription} \nHumidity: ${humidity}%\nPressure: ${pressure}atm\nSunrise : ${sunrise.toLocaleTimeString()}\nSunset : ${sunset.toLocaleTimeString()}\nCountry : ${country}`
    return message;
  } catch (error) {
    console.error(error);
    return `sorry i don't know ${location}`;
  }
};

export default weatherReport;
