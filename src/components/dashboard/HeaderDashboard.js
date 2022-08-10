// Node Modules
import styled from "styled-components";
import { UilBell, UilUser } from "@iconscout/react-unicons";

// Components
import TextField from "../general/TextField";
import { SecondaryButton } from "../general/Buttons";

// Styled Components
const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  margin-top: 2em;
`;

const DateContainer = styled.div`
  min-width: 175px;
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

function HeaderDashboard({ setQuery }) {
  return (
    <DashboardHeader>
      <DateContainer>
        <h2>January 2022</h2>
        <p>Thursday, Jan 4, 2022</p>
      </DateContainer>
      <TextField
        handleOnChange={e => setQuery(e.target.value)}
        placeholder="Search location here"
      ></TextField>
      <SecondaryButton>
        <UilBell />
      </SecondaryButton>
      <SecondaryButton>
        <UilUser />
      </SecondaryButton>
    </DashboardHeader>
  );
}

export default HeaderDashboard;
