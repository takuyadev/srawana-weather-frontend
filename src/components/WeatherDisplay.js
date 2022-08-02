import styled from "styled-components";

const Container = styled.div`
  padding: 1em;
`;

const DegreeText = styled.h2`
  font-size: 1.5rem;
`;

const Icon = styled.img`

`
function WeatherDisplay({ temp, icon }) {
  return (
    <Container>
      <Icon src={`https://openweathermap.org/img/w/${icon}.png`}></Icon>
      <DegreeText>{temp}</DegreeText>
    </Container>
  );
}

export default WeatherDisplay;
