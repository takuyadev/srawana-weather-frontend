import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
`;

const HeadingLogo = styled.h1`  
  font-size: ${props => props.theme.fontSize["xl"]}
`;

function Header() {
  return (
    <HeaderContainer>
      <HeadingLogo>Cast</HeadingLogo>
    </HeaderContainer>
  );
}

export default Header;
