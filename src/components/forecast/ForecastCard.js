// Node Modules
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  padding: 1em;
  border-radius: 8px;
  background: ${props => props.theme.colors.gray["0"]}11;
  border: 1px solid ${props => props.theme.colors.gray["200"]};
`;

const TimeContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  & h4 {
    margin: 0;
    text-transform: capitalize;
    font-size: ${props => props.theme.fontSize["s"]};
  }
  & p {
    margin: 0;
    margin-top: 0.25em;
    font-size: ${props => props.theme.fontSize["l"]};
  }
`;

const WhenText = styled.p`
  color: ${props => props.theme.colors.gray["500"]};
`;

const Icon = styled.img`
  width: 48px;
`;

function SunCard({ icon, weather, degree, date }) {
  return (
    <Container>
      <TimeContainer>
        <Icon src={`https://openweathermap.org/img/w/${icon}.png`}></Icon>
        <div>
          <h4>{weather}</h4>
          <p>{degree}℃</p>
        </div>
      </TimeContainer>
      <WhenText>{date}</WhenText>
    </Container>
  );
}

SunCard.defaultProps = {
  icon: "04d",
  weather: "Broken Clouds",
  degree: "20",
  date: "August 18, 2022"
};
export default SunCard;
