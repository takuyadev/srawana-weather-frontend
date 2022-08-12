import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Time = styled.p`
  font-size: ${props => props.theme.fontSize["m"]};
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

function HeaderForecast({name, location, time}) {
  return (
    <Header>
      <UserInfoContainer>
        <h2>{name}</h2>
        <p>{location}</p>
      </UserInfoContainer>
      <Time>{time}</Time>
    </Header>
  );
}

export default HeaderForecast