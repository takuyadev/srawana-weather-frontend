import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 1em 1.5em;
  border-radius: 8px;
  background: ${props => props.theme.colors.gray["100"]};
`;

const Icon = styled.div`
  color: ${props => props.theme.colors.primary["600"]};
`;

const DescriptionContainer = styled.div`
  & > h3 {
    font-weight: normal;
    font-size: ${props => props.theme.fontSize["s"]};
    color: ${props => props.theme.colors.gray["500"]};
    margin-bottom: 0;
  }
  & > p {
    margin-top: 0.25em;
    font-weight: medium;
    font-size: ${props => props.theme.fontSize["l"]};
    color: ${props => props.theme.colors.gray["800"]}
  }
`;

function WeatherCard({ icon, heading, desc }) {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <DescriptionContainer>
        <h3>{heading}</h3>
        <p>{desc}</p>
      </DescriptionContainer>
    </Container>
  );
}

export default WeatherCard;
