import styled from "styled-components";

const Container = styled.div`
  padding: 1em;
`;

const DegreeText = styled.h2`
  font-size: 1.5rem;
`;
function WeatherDisplay({ temp }) {
  return (
    <Container>
      <DegreeText>{temp}</DegreeText>
    </Container>
  );
}

export default WeatherDisplay;
