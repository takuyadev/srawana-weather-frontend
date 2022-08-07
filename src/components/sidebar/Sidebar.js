import styled from "styled-components";
import { UilTachometerFastAlt } from "@iconscout/react-unicons";
import NavItem from "./NavItem";

const FlexContainer = styled.div`
  display: flex;
`;

const MainContainer = styled(FlexContainer)`
  grid-area: sidebar;
  grid-column: span 2;
  flex-direction: column;
  height: 100vh;
  gap: 2em;
  padding: 2em;
  background: ${props => props.theme.colors.gray["100"]}
`;

const NavContainer = styled(FlexContainer)`
  flex-direction: column;
  gap: 1.5em;
`;

const ItemContainer = styled(FlexContainer)`
  flex-direction: column;
`;

const LogoContainer = styled(FlexContainer)``;

const LogoImage = styled.h1`
  font-size: ${props => props.theme.fontSize["m"]};
`;

const LogoText = styled.h1`
  font-size: ${props => props.theme.fontSize["m"]};
`;

function Sidebar() {
  return (
    <MainContainer>
      <LogoContainer>
        <LogoText>Srawana</LogoText>
      </LogoContainer>
      <NavContainer>
        <NavItem
          href="google.ca"
          icon={<UilTachometerFastAlt />}
          text="Dashboard"
        ></NavItem>
        <NavItem
          href="google.ca"
          icon={<UilTachometerFastAlt />}
          text="Dashboard"
        ></NavItem>
        <NavItem
          href="google.ca"
          icon={<UilTachometerFastAlt />}
          text="Dashboard"
        ></NavItem>
      </NavContainer>
      <ItemContainer></ItemContainer>
    </MainContainer>
  );
}

export { Sidebar };
