// Node Modules
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const DegreeText = styled.h2`
  font-weight: normal;
  margin: 0;
  font-size: ${props => props.theme.fontSize["3xl"]};
`;

const WeatherText = styled.p`
  font-weight: normal;
  font-size: ${props => props.theme.fontSize["s"]};
  text-transform: capitalize;
  color: ${props => props.theme.colors.gray["500"]};
`;

const Icon = styled.img`
  width: 48px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function CurrentWeather({ temp, icon, weather }) {
  return (
    <Container>
      <Icon src={`https://openweathermap.org/img/w/${icon}.png`}></Icon>
      <InfoContainer>
        <DegreeText>{temp}&#176; C</DegreeText>
        <WeatherText>{weather}</WeatherText>
      </InfoContainer>
    </Container>
  );
}

CurrentWeather.defaultProps = {
  temp: "20",
  icon: "04d",
  weather: "Dramatic Cloudy"
};

export default CurrentWeather;
