import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const Text = styled.p`
  font-size: ${props => props.theme.fontSize["s"]};
  margin: 0;
`;

const Bar = styled.div`
  position: relative;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  border-radius: 16px;
  background: ${props => props.theme.colors.primary["700"]};
  &::after {
    content: "";
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => (props.width ? props.width : "50")}%;
    height: 100%;
    border-radius: 16px;
    background: ${props => props.theme.colors.primary["500"]};
  }
`;

function RainPercentageBar({ time, width }) {
  return (
    <Container>
      <Text>{time}</Text>
      <Bar width={width} />
      <Text>{width}%</Text>
    </Container>
  );
}

RainPercentageBar.defaultProps = {
  time: "7AM",
  width: "50"
};

export default RainPercentageBar;
