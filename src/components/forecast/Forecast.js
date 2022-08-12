import styled from "styled-components";

// Components
import CurrentWeather from "./CurrentWeather";
import RainPercentageBar from "./RainPercentageBar";
import SunCard from "./SunCard";
import HeaderForecast from "./HeaderForecast";

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2em;
  grid-area: forecast;
  grid-column: span 3;
  box-sizing: border-box;
  height: 100vh;
  padding: 2em;
  overflow-y: scroll;
  color: ${props => props.theme.colors.gray["0"]};
  background-image: linear-gradient(
    ${props => props.theme.colors.primary["800"]},
    ${props => props.theme.colors.primary["900"]},
    ${props => props.theme.colors.primary["700"]}
  );
  @media (max-width: 900px) {
    grid-column: span 10;
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

function Forecast({ name, location, time, temp, rain }) {
  return (
    <Container>
      <HeaderForecast name={name} location={location} time={time} />
      <CurrentWeather />
      <HorizontalRule />
      <InformationContainer>
        <Heading>Chance of rain</Heading>
        <RainPercentageBar width="25" />
        <RainPercentageBar />
        <RainPercentageBar />
        <RainPercentageBar />
      </InformationContainer>
      <InformationContainer>
        <Heading>Sunrise & Sunset</Heading>
        <SunCard />
        <SunCard type="sunset" />
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
