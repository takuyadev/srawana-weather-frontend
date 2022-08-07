// Node Modules\
import styled from "styled-components";
import { useEffect, useState } from "react";

// Functions
import { getWeatherByCoords, getWeatherByCity } from "./modules/GetWeather";
import { getKelvinToCelcius } from "./modules/Converter";


//Components
import { Sidebar } from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { PrimaryButton } from "./components/general/Buttons";
import TextField from "./components/general/TextField";
import Container from "./components/general/Container";
import WeatherDisplay from "./components/dashboard/WeatherDisplay";
import LoadingCircle from "./components/general/LoadingCircle";

//Styled Components

const Main = styled.main`
  margin: 0 2em;
  grid-area: dashboard;
  grid-column: span 8
`;

const AppDiv = styled.div`
  display: grid;
  grid-template-areas: "sidebar dashboard";
  grid-template-columns: repeat(10, 1fr);
  flex-direction: row;
  gap: 2em;
`;

function App() {
  const [position, setPosition] = useState({});
  const [query, setQuery] = useState();
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();

  const updateWeatherData = async (callback, data) => {
    setWeather(null);
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

  const submitCity = e => {
    e.preventDefault();
    setCity(query);
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  useEffect(() => {
    updateWeatherData(getWeatherByCoords, position);
  }, [position]);

  useEffect(() => {
    updateWeatherData(getWeatherByCity, city);
  }, [city]);

  return (
    <AppDiv>
      <Sidebar/>
      <Main>
        <Container>
          {weather ? (
            <WeatherDisplay
              temp={getKelvinToCelcius(weather.list[0].main.temp).toFixed(0)}
              icon={weather.list[0].weather[0].icon}
            />
          ) : (
            <LoadingCircle />
          )}
          <form onSubmit={submitCity}>
            <TextField
              handleOnChange={e => setQuery(e.target.value)}
            ></TextField>
            <PrimaryButton type="submit"> Get Location</PrimaryButton>
          </form>
        </Container>
      </Main>
    </AppDiv>
  );
}

export default App;
