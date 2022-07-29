import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
`;

const HeadingLogo = styled.h1`
  font-size: 2rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeadingLogo>Weather App</HeadingLogo>
    </HeaderContainer>
  );
}

export default Header;
