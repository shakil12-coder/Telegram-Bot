import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
var key = process.env.WEATHER_API;

const weatherReport = async (location) => {
  var link = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;
  // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`, {
  //           rejectUnauthorized: false,
  //         });
  try {
    var response = await axios.get(link);
    // console.log("response = ", response.data);
    var weatherData = response.data;
    var city = weatherData.name;
    var temp = weatherData.main.temp;
    var weatherCondition = weatherData.main.humidity;
    var region = weatherData.sys.country;
    var country = weatherData.sys.country;
    var windspeed = weatherData.wind.speed;
    var humidity = weatherData.main.humidity;
    var weathermsg = `The temperature in ${city} is ${temp}°C with ${weatherCondition} Sky\n Wind is blowing at a speed of ${windspeed} km/h \n humidity is ${humidity}. in ${city}, ${country}.`;
    return weathermsg;
  } catch (error) {
    console.error(error);
    return `sorry i don't know ${location}`;
  }
};

export default weatherReport;
