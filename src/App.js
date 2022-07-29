// Node Modules\
import { useEffect, useState } from "react";

// Functions
import { getWeather } from "./modules/GetWeather";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PrimaryButton } from "./components/Buttons";
import TextField from "./components/TextField";
import Container from "./components/Container";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [query, setQuery] = useState();
  const [position, setPosition] = useState({
    latitude: 49,
    longitude: 139
  });
  const [weather, setWeather] = useState()

  const updateWeatherData = async (position) => {
    position && setWeather(await getWeather(position))
  };

  const getTextField = e => {
    setQuery(e.target.value);
  };

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(position=>{
      const positionObject = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      setPosition(positionObject)
    })
  }

  useEffect(()=>{
    updateWeatherData(position)
  },[position])

  useEffect(()=>{
    getCurrentPosition()
  },[])
  

  return (
    <div className="App">
      <Header />
      <Container>
        {weather && <WeatherDisplay temp={weather.main.temp}/>}
        <TextField handleOnChange={getTextField} />
        <PrimaryButton handleOnClick={()=>updateWeatherData(position)}>
          Update Address
        </PrimaryButton>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
