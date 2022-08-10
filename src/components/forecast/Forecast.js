import styled from "styled-components";
import CurrentWeather from "./CurrentWeather";
import RainPercentageBar from "./RainPercentageBar";
import SunCard from "./SunCard";

const Container = styled.aside`
  display: flex;
  box-sizing: border-box;
  gap: 2em;
  flex-direction: column;
  grid-area: forecast;
  grid-column: span 3;
  height: 100vh;
  overflow-y: scroll;
  padding: 2em;
  color: ${props => props.theme.colors.gray["0"]};
  background-image: linear-gradient(
    ${props => props.theme.colors.primary["800"]},
    ${props => props.theme.colors.primary["900"]},
    ${props => props.theme.colors.primary["700"]}
  );
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const UserInfoContainer = styled.div`
  & > h2 {
    font-size: ${props => props.theme.fontSize["m"]};
    margin-bottom: 0;
  }

  & > p {
    color: ${props => props.theme.colors.gray["500"]};
    margin-top: 0;
  }
`;

const Heading = styled.h3`
  font-weight: normal;
  font-size: ${props => props.theme.fontSize["m"]};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HorizontalRule = styled.hr`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.gray["100"]};
  opacity: 0.1;
`;

const Time = styled.p`
  font-size: ${props => props.theme.fontSize["m"]};
`;

function Forecast({ name, location, time, temp, rain }) {
  return (
    <Container>
      <Header>
        <UserInfoContainer>
          <h2>{name}</h2>
          <p>{location}</p>
        </UserInfoContainer>
        <Time>{time}</Time>
      </Header>
      <CurrentWeather></CurrentWeather>
      <HorizontalRule></HorizontalRule>
      <InformationContainer>
        <Heading>Chance of rain</Heading>
        <RainPercentageBar width="25"/>
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
