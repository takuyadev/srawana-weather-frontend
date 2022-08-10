// Node Modules\
import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  UilBell,
  UilUser,
  UilWind,
  UilWater,
  UilSun,
  UilCloudShowersHeavy
} from "@iconscout/react-unicons";

// Functions
import { getWeatherByCoords, getWeatherByCity } from "./modules/GetWeather";
import { getKelvinToCelcius } from "./modules/Converter";

//Components
import { Sidebar } from "./components/sidebar/Sidebar";
import WeatherCard from "./components/dashboard/WeatherCard";
import Footer from "./components/footer/Footer";
import { PrimaryButton, SecondaryButton } from "./components/general/Buttons";
import TextField from "./components/general/TextField";
import Container from "./components/general/Container";
import WeatherDisplay from "./components/dashboard/WeatherDisplay";
import LoadingCircle from "./components/general/LoadingCircle";

//Styled Components

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2em;
  box-sizing: border-box;
  margin: 0 2em;
  grid-area: dashboard;
  grid-column: span 8;
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-areas: "sidebar dashboard";
  grid-template-columns: repeat(10, 1fr);
  flex-direction: row;
  gap: 2em;
`;

const OverviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1em;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  margin-top: 2em;
`;

const DateContainer = styled.div`
  min-width: 175px;
  font-size: ${props => props.theme.fontSize["s"]};
  & > h2 {
    color: ${props => props.theme.colors.gray["800"]};
    margin-bottom: 0;
  }
  & > p {
    margin-top: 0;
    color: ${props => props.theme.colors.gray["500"]};
  }
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
      <Main>
        <DashboardHeader>
          <DateContainer>
            <h2>January 2022</h2>
            <p>Thursday, Jan 4, 2022</p>
          </DateContainer>
          <TextField
            handleOnChange={e => setQuery(e.target.value)}
            placeholder="Search location here"
          ></TextField>
          <SecondaryButton>
            <UilBell />
          </SecondaryButton>
          <SecondaryButton>
            <UilUser />
          </SecondaryButton>
        </DashboardHeader>
        <OverviewContainer>
          <WeatherCard icon={<UilWind />} heading="Wind Speed" desc="20m" />
          <WeatherCard icon={<UilSun />} heading="UV Index" desc="20m" />
          <WeatherCard icon={<UilWater />} heading="Pressure" desc="20m" />
          <WeatherCard
            icon={<UilCloudShowersHeavy />}
            heading="Rain Chance"
            desc="20m"
          />
        </OverviewContainer>
      </Main>
    </AppContainer>
  );
}

export default App;
