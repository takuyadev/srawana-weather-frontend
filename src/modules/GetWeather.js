import axios from "axios";

const getWeatherByCoords = async position => {
  const { latitude, longitude } = position;
  const request = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a00f189b8dbfcea63e95c84fa40bf1b7`;
  if (position) {
    try {
      const response = await axios.get(request);
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
};

const getWeatherByCity = async city => {
  const request = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a00f189b8dbfcea63e95c84fa40bf1b7`;
  if (city) {
    try {
      const response = await axios.get(request);
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
};

export { getWeatherByCoords, getWeatherByCity };
