// Node Modules\
import styled from "styled-components";
import { useEffect, useState } from "react";

// Functions
import { getWeatherByCoords, getWeatherByCity } from "./modules/GetWeather";

//Components
import Dashboard from "./components/dashboard/Dashboard";
import { Sidebar } from "./components/sidebar/Sidebar";
import Forecast from "./components/forecast/Forecast";

//Styled Components

const AppContainer = styled.div`
  display: grid;
  grid-template-areas: "sidebar dashboard forecast";
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
    <AppContainer>
      <Sidebar />
      <Dashboard setQuery={setQuery} />
      <Forecast></Forecast>
    </AppContainer>
  );
}

export default App;
