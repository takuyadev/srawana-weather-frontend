// Node Modules\
import { useEffect, useState } from "react";

// Functions
import { getWeatherByCoords, getWeatherByCity } from "./modules/GetWeather";
import { getKelvinToCelcius } from "./modules/Converter";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PrimaryButton } from "./components/Buttons";
import TextField from "./components/TextField"
import Container from "./components/Container";
import WeatherDisplay from "./components/WeatherDisplay";
import LoadingCircle from "./components/LoadingCircle";

function App() {
  const [position, setPosition] = useState({});
  const [query, setQuery] = useState()
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState();

  const updateWeatherData = async (callback, data) => {
    setWeather(null)
    position && setWeather(await callback(data));
  };

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const positionObject = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      setPosition(positionObject);
    });
  };

  const submitCity = (e) => {
    e.preventDefault()
    setCity(query)
  }

  useEffect(() => {
    getCurrentPosition();
  }, []);

  useEffect(() => {
    updateWeatherData(getWeatherByCoords, position);
  }, [position]);

  useEffect(()=>{
    updateWeatherData(getWeatherByCity, city)
  },[city])

  return (
    <div className="App">
      <Header />
      <Container>
        {weather ? (
          <WeatherDisplay
            temp={getKelvinToCelcius(weather.main.temp).toFixed(0)}
            icon={weather.weather[0].icon}
          />
        ) : (
          <LoadingCircle />
        )}
        <form onSubmit={submitCity}>
          <TextField handleOnChange={(e)=>setQuery(e.target.value)}></TextField>
          <PrimaryButton type="submit"> Get Location</PrimaryButton>
        </form>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
