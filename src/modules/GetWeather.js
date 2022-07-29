import axios from "axios";

const getWeather = async (position) => {
  const { latitude, longitude } = position;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a00f189b8dbfcea63e95c84fa40bf1b7`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getWeather };
