// Node Modules
import styled from "styled-components";
import { UilBell, UilUser } from "@iconscout/react-unicons";

// Components
import TextField from "../general/TextField";
import { SecondaryButton } from "../general/Buttons";

// Styled Components
const DashboardHeader = styled.div`
  display: grid;
  grid-template-areas: "date textfield buttons";
  align-items: center;
  gap: 1em;
  margin-top: 2em;

  @media (max-width: 900px) {
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
  gap: 1em;
  grid-area: buttons;
`;

const TextFieldContainer = styled.div`
  grid-area: textfield;
  justify-self: flex-end;
`;

function HeaderDashboard({ setQuery }) {
  return (
    <DashboardHeader>
      <DateContainer>
        <h2>January 2022</h2>
        <p>Thursday, Jan 4, 2022</p>
      </DateContainer>
      <TextFieldContainer>
        <TextField
          handleOnChange={e => setQuery(e.target.value)}
          placeholder="Search location here"
        ></TextField>
      </TextFieldContainer>
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
