// Node Modules\
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import { TimeContext } from "./modules/TimeContext";

// Functions
import {
  getWeatherByCoords,
  getWeatherByCity,
  getCurrentPosition
} from "./modules/GetWeather";

//Components
import Dashboard from "./components/dashboard/Dashboard";
import { Sidebar } from "./components/navbar/Sidebar";
import Forecast from "./components/forecast/Forecast";
import Message from "./components/general/Message";
import LoadingCircle from "./components/general/LoadingCircle";

//Styled Components

const AppContainer = styled.div`
  display: grid;
  justify-content: stretch;
  grid-template-areas: "sidebar dashboard forecast";
  grid-template-columns: repeat(10, 1fr);
  flex-direction: row;
  gap: 0.5em;

  @media (max-width: 900px) {
    overflow-y: hidden;
    grid-template-areas:
      "sidebar dashboard"
      "sidebar forecast";
  }
`;

const LoadingContainer = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5em;
`;

function App() {
  // Default position
  const [position, setPosition] = useState({
    latitude: 51.50722,
    longitude: -0.1275
  });
  const [query, setQuery] = useState();
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const { setTime } = useContext(TimeContext);

  const pageTransition = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1
    }
  };

  // Set query, which goes to useEffect listener and gets data
  const submitCity = e => {
    e.preventDefault();
    setCity(query);
  };


  const updateWeatherData = async (callback, data) => {
    // Set weather to null to display loading screen based on component mounting system
    setWeather(null);

    // Set data for status check and updating data
    const oldWeatherData = weather;
    const updatedWeatherData = await callback(data);
    const status = await updatedWeatherData.cod;

    // Error check for status, only update if code is 200
    if (status === "200") {
      setWeather(updatedWeatherData);
    } else {
      setWeather(oldWeatherData);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      setTime(
        `${d.getHours()}:${d.getMinutes() < 10 ? "0" : ""}${d.getMinutes()}`
      );
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCurrentPosition(setPosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateWeatherData(getWeatherByCoords, position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  useEffect(() => {
    city && updateWeatherData(getWeatherByCity, city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <AppContainer>
      <AnimatePresence>
        {weather ? (
          <>
            <Message />
            <Sidebar />
            <Dashboard
              data={weather}
              setQuery={setQuery}
              submitCity={submitCity}
            />
            <Forecast data={weather}></Forecast>
          </>
        ) : (
          <LoadingContainer
            variants={pageTransition}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <LoadingCircle />
            <p>Loading...</p>
          </LoadingContainer>
        )}
      </AnimatePresence>
    </AppContainer>
  );
}

export default App;
