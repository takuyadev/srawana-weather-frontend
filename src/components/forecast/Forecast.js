// Node Modules
import styled from "styled-components";

// Components
import CurrentWeather from "./CurrentWeather";
import RainPercentageBar from "./RainPercentageBar";
import ForecastCard from "./ForecastCard";
import HeaderForecast from "./HeaderForecast";

// Function
import { getKelvinToCelcius } from "../../modules/Converter";

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2em;
  grid-area: forecast;
  grid-column: span 3;
  box-sizing: border-box;
  height: 100vh;
  padding: 2em;
  overflow-y: auto;
  color: ${props => props.theme.colors.gray["0"]};
  background-image: linear-gradient(
    ${props => props.theme.colors.primary["800"]},
    ${props => props.theme.colors.primary["900"]},
    ${props => props.theme.colors.primary["700"]}
  );
  @media (max-width: 900px) {
    grid-column: span 10;
    height: 50vh;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #f5f7fc;
  }

  ::-webkit-scrollbar-thumb {
    background: #4d65b4;
    border-radius: 10px;
  }
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const Heading = styled.h3`
  font-weight: normal;
  font-size: ${props => props.theme.fontSize["m"]};
`;

const HorizontalRule = styled.hr`
  width: 100%;
  opacity: 0.1;
  border: 1px solid ${props => props.theme.colors.gray["100"]};
`;

function Forecast({ data, name, time }) {

  const ForecastCards = data.list.map((item, i)=> {
    const d = new Date();
    return (
      <ForecastCard
        key={i}
        icon={item.weather[0].icon}
        weather={item.weather[0].description}
        degree={getKelvinToCelcius(item.main.temp).toFixed(0)}
        date={`${new Date(d.setDate(d.getDate()+i)).toDateString()}`}
      />
    );
  });

  return (
    <Container>
      <HeaderForecast name={name} location={data.city.name} time={time} />
      <CurrentWeather
        icon={data.list[0].weather[0].icon}
        weather={data.list[0].weather[0].description}
        temp={getKelvinToCelcius(data.list[0].main.temp).toFixed(0)}
      />
      <HorizontalRule />
      <InformationContainer>
        <Heading>Chance of rain</Heading>
        <RainPercentageBar width={data && data.list[0].pop * 100} />
      </InformationContainer>
      <InformationContainer>
        <Heading>Weekly Forecast</Heading>
        {ForecastCards}
      </InformationContainer>
    </Container>
  );
}

Forecast.defaultProps = {
  name: "Takuya Toyokawa",
  location: "Tokyo, Japan",
  time: "08:54 AM"
};
export default Forecast;
