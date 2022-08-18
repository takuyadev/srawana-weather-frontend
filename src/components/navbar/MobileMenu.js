// Node Modules
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  UilTachometerFastAlt,
  UilMapPin,
  UilCalendarAlt,
  UilMap,
  UilSetting,
  UilSignout,
  UilMultiply,
  UilBell,
  UilUser
} from "@iconscout/react-unicons";

// Components
import NavItem from "./NavItem";

const NavContainer = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  gap: 1em;
  height: 100vh;
  width: 100vw;
  z-index: 99;
  background: ${props => props.theme.colors.gray["0"]};
`;

const CloseButton = styled(UilMultiply)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

function MobileMenu({ setIsOpen, isOpen }) {
  const slideInAnimation = {
    hidden: {
      x: 200,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <NavContainer
      variants={slideInAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <CloseButton onClick={() => setIsOpen(!isOpen)} />
      <NavItem href="/" icon={<UilTachometerFastAlt />} text="Dashboard" />
      <NavItem href="/" icon={<UilMap />} text="Map" />
      <NavItem href="/" icon={<UilMapPin />} text="Saved Location" />
      <NavItem href="/" icon={<UilCalendarAlt />} text="Calendar" />
      <NavItem href="/" icon={<UilUser />} text="Profile" />
      <NavItem href="/" icon={<UilBell />} text="Notifications" />
      <NavItem href="/" icon={<UilSetting />} text="Settings" />
      <NavItem href="/" icon={<UilSignout />} text="Logout Account" />
    </NavContainer>
  );
}

export default MobileMenu;
