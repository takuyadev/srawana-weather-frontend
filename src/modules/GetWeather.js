import axios from "axios";


// Gets weather by position coordinates
const getWeatherByCoords = async position => {
  const { latitude, longitude } = position;
  const request = `https://api.openweathermap.org/data/2.5/forecast/?lat=${latitude}&lon=${longitude}&cnt=7&appid=a00f189b8dbfcea63e95c84fa40bf1b7`;
  if (latitude || longitude) {
    try {
      const response = await axios.get(request);
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
};


// Gets weather by queried coordinate that was inputed in the searchbar
const getWeatherByCity = async city => {
  const request = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&cnt=7&appid=a00f189b8dbfcea63e95c84fa40bf1b7`;
  if (city) {
    try {
      const response = await axios.get(request);
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error)
      return {
        cod: error.response.status
      };
    }
  }
};

const getCurrentPosition = (setPosition) => {
  // Gets current position of user if user has requested the service
  navigator.geolocation.getCurrentPosition(position => {
    const positionObject = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
    setPosition(positionObject);
  });
};

export { getWeatherByCoords, getWeatherByCity, getCurrentPosition };
