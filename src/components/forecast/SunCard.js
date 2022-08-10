import styled from "styled-components";
import { UilSun, UilSunset } from "@iconscout/react-unicons";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  border-radius: 8px;
  padding: 1em;
  background: ${props => props.theme.colors.gray["0"]}11;
  border: 1px solid ${props => props.theme.colors.gray["200"]};
`;

const TimeContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items:center;
  & h4 {
    margin: 0;
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

function SunCard({ type, time, when }) {
  return (
    <Container>
      <TimeContainer>
        {type === "sunrise" ? <UilSun size={24}/> : <UilSunset />}
        <div>
          <h4>{type === "sunrise" ? "Sunrise" : "Sunset"}</h4>
          <p>{time}</p>
        </div>
      </TimeContainer>
      <WhenText>{when}</WhenText>
    </Container>
  );
}

SunCard.defaultProps = {
  type: "sunrise",
  time: "4:20 AM",
  when: "4 hours ago"
};
export default SunCard;
