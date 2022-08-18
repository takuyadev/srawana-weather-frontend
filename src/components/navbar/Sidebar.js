// Node Modules
import styled from "styled-components";
import {
  UilTachometerFastAlt,
  UilMapPin,
  UilCalendarAlt,
  UilCloudMoonMeatball,
  UilMap,
  UilSetting,
  UilSignout
} from "@iconscout/react-unicons";

// Components
import NavItem from "./NavItem";

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
`;

const MainContainer = styled.nav`
  display: flex;
  position: sticky;
  flex-direction: column;
  justify-content: space-between;
  grid-area: sidebar;
  grid-column: span 2;
  height: 100vh;
  gap: 3em;
  box-sizing: border-box;
  padding: 2em;
  background: ${props => props.theme.colors.gray["100"]};

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #f5f7fc;
  }

  ::-webkit-scrollbar-thumb {
    background: #4d65b4;
    border-radius: 10px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25em;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.primary["500"]};
  gap: 1em;
`;

const LogoText = styled.h1`
  font-size: ${props => props.theme.fontSize["l"]};
`;

function Sidebar() {
  return (
    <MainContainer>
      <TopContainer>
        <LogoContainer>
          <UilCloudMoonMeatball size={36} />
          <LogoText>Srawana</LogoText>
        </LogoContainer>
        <NavContainer>
          <NavItem
            href="/"
            icon={<UilTachometerFastAlt />}
            text="Dashboard"
          ></NavItem>
          <NavItem href="/" icon={<UilMap />} text="Map"></NavItem>
          <NavItem
            href="/"
            icon={<UilMapPin />}
            text="Saved Location"
          ></NavItem>
          <NavItem href="/" icon={<UilCalendarAlt />} text="Calendar"></NavItem>
        </NavContainer>
      </TopContainer>
      <NavContainer>
        <NavItem href="/" icon={<UilSetting />} text="Settings"></NavItem>
        <NavItem href="/" icon={<UilSignout />} text="Logout Account"></NavItem>
      </NavContainer>
    </MainContainer>
  );
}

export { Sidebar };
