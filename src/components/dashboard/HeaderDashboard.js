// Node Modules
import { useState, useContext } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { UilBell, UilUser, UilBars } from "@iconscout/react-unicons";
import { TimeContext } from "../../modules/TimeContext";

// Components
import TextField from "../general/TextField";
import { PrimaryButton, SecondaryButton } from "../general/Buttons";
import MobileMenu from "../navbar/MobileMenu";

// Styled Components
const DashboardHeader = styled.div`
  display: grid;
  grid-template-areas: "date textfield buttons";
  align-items: center;
  gap: 1em;
  margin-top: 2em;
  @media (max-width: 1200px) {
    grid-template-areas:
      "date buttons"
      "textfield textfield";
  }
`;

const DateContainer = styled.div`
  grid-area: date;
  white-space: nowrap;
  font-size: ${props => props.theme.fontSize["s"]};

  & > h2 {
    color: ${props => props.theme.colors.gray["800"]};
    margin-bottom: 0;
  }
  & > p {
    margin-top: 0;
    color: ${props => props.theme.colors.gray["500"]};
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-area: buttons;
  gap: 1em;
  @media (max-width: 900px) {
    display: none;
  }
`;

const MenuButton = styled.div`
  display: none;
  cursor: pointer;
  justify-self: flex-end;
  grid-area: buttons;
  @media (max-width: 900px) {
    display: block;
  }
`;

const TextFieldContainer = styled.form`
  display: flex;
  gap: 1em;
  grid-area: textfield;
  justify-self: stretch;

  @media (max-width: 900px) {
    justify-self: auto;
  }
`;

function HeaderDashboard({ setQuery, submitCity }) {
  const { date } = useContext(TimeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DashboardHeader>
      <AnimatePresence>
        {isOpen && <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />}
      </AnimatePresence>
      <DateContainer>
        <h2>
          {date.month} {date.year}
        </h2>
        <p>
          {date.day}, {date.month} {date.date}, {date.year}
        </p>
      </DateContainer>
      <TextFieldContainer onSubmit={submitCity}>
        <TextField
          handleOnChange={e => setQuery(e.target.value)}
          placeholder="Search location here"
        ></TextField>
        <PrimaryButton type="submit">Search</PrimaryButton>
      </TextFieldContainer>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <UilBars />
      </MenuButton>
      <ButtonsContainer>
        <SecondaryButton>
          <UilBell />
        </SecondaryButton>
        <SecondaryButton>
          <UilUser />
        </SecondaryButton>
      </ButtonsContainer>
    </DashboardHeader>
  );
}

export default HeaderDashboard;
